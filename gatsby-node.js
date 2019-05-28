const path = require('path')

const _ = require('lodash')
const dayjs = require('dayjs')
const R = require('ramda')
const {
  createFilePath,
  createRemoteFileNode,
} = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postPage = path.resolve('src/templates/blog-post.js')
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              title
              categories
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: postPage,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    })

    // Tag pages:
    let categories = []
    // Iterate through each post, putting all found categories into `categories`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.categories`)) {
        categories = categories.concat(edge.node.frontmatter.categories)
      }
    })
    // Eliminate duplicate categories
    categories = _.uniq(categories)

    // Make category pages
    categories.forEach(category => {
      const categoryPath = `/categories/${_.kebabCase(category)}/`

      createPage({
        path: categoryPath,
        component: path.resolve(`src/templates/category.js`),
        context: {
          category,
        },
      })
    })
  })
}

exports.onCreateNode = async ({
  node,
  actions,
  store,
  cache,
  createNodeId,
  getNode,
  getNodesByType,
}) => {
  const { createNodeField, createNode } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `Properties`) {
    const images = getNodesByType(`Images`)
    const image = R.find(
      R.pathEq(['property', 'alternative_id'], node.alternative_id),
      images
    )
    let fileNode
    if (image) {
      try {
        fileNode = await createRemoteFileNode({
          url: `https:${image.downloadUrl}`,
          parentNodeId: node.id,
          store,
          cache,
          createNode,
          createNodeId,
        })
      } catch (error) {
        console.error(`Error creating image ${error}`)
      }
      if (fileNode) {
        node.image___NODE = fileNode.id
      }
    }
  }

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
    const date = dayjs(node.frontmatter.date)
    createNodeField({
      name: `date`,
      node,
      value: date.toISOString(),
    })
  }
}
