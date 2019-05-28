const path = require('path')

const axios = require('axios')
const _ = require('lodash')
const dayjs = require('dayjs')
const R = require('ramda')
const {
  createFilePath,
  createRemoteFileNode,
} = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

const fetchImage = async property => {
  try {
    const response = await axios.get('https://api.myvr.com/v1/photos?limit=1', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer LIVE_14875846ee1c2d1ba730e1d06b7c2c48`,
      },
      params: {
        property: property,
      },
    })
    return response.data.results[0]
  } catch (error) {
    return null
  }
}

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
}) => {
  const { createNodeField, createNode, deleteNode } = actions

  if (node.internal.type === `Properties`) {
    const image = await fetchImage(node.alternative_id)
    let fileNode
    if (image !== null) {
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
        deleteNode(node)
      }
      if (fileNode) {
        node.image___NODE = fileNode.id
      } else {
        deleteNode(node)
      }
    } else {
      deleteNode(node)
    }
  }

  if (node.internal.type === `MarkdownRemark`) {
    fmImagesToRelative(node) // convert image paths for gatsby images
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
