const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostResult = await graphql(`
    {
      allWordpressWpBlogPosts {
        edges {
          node {
            id
            slug
            status
          }
        }
      }
    }
  `)
  const posts = blogPostResult.data.allWordpressWpBlogPosts.edges
  posts.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: path.resolve('src/templates/blog-post.js'),
      context: {
        id: edge.node.id,
      },
    })
  })

  const categoryResult = await graphql(`
    {
      allWordpressCategory(filter: { count: { gt: 0 } }) {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
  `)
  const categories = categoryResult.data.allWordpressCategory.edges
  categories.forEach(({ node: cat }) => {
    createPage({
      path: `/categories/${cat.slug}/`,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        name: cat.name,
        slug: cat.slug,
      },
    })
  })

  const cottagesResult = await graphql(`
    {
      allWordpressWpMphbRoomType {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  const cottages = cottagesResult.data.allWordpressWpMphbRoomType.edges
  cottages.forEach(({ node: cot }) => {
    createPage({
      path: `/cottages/${cot.slug}/`,
      component: path.resolve(`./src/templates/cottage.js`),
      context: {
        id: cot.id,
        slug: cot.slug,
      },
    })
  })
}
