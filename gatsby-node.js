const path = require(`path`)

exports.onCreateWebpackConfig = ({ _, actions }) => {
  actions.setWebpackConfig({
    devtool: `eval-source-map`,
  })
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const fetchType = async type => {
    const result = await graphql(`
    {
      ${type} {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
    return result.data[type].edges
  }

  const generatePages = async (type, base, file) => {
    const component = path.resolve(`./src/templates/${file}`)
    const data = await fetchType(type)
    data.forEach(({ node: { id, slug } }) => {
      const path = `/${base}/${slug}`
      const context = {
        id,
        slug,
      }
      createPage({
        path,
        component,
        context,
      })
    })
  }

  generatePages(`allWordpressWpBlogPosts`, `posts`, `blog-post.js`)
  generatePages(`allWordpressCategory`, `categories`, `category.js`)
  generatePages(`allWordpressTag`, `tags`, `category.js`)
  generatePages(`allWordpressWpMphbRoomType`, `cottages`, `cottage.js`)
}
