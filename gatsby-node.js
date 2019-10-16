const path = require('path')

exports.onCreateWebpackConfig = ({ _, actions }) => {
  actions.setWebpackConfig({
    devtool: 'eval-source-map',
  })
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const fetchType = async (type, query = '') => {
    const result = await graphql(`
    {
      ${type} {
        edges {
          node {
            id
            slug
            ${query}
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
    data.forEach(({ node: { id, slug, name } }) => {
      const path = `/${base}/${slug}`
      const context = {
        id,
        slug,
        name,
      }
      createPage({
        path,
        component,
        context,
      })
    })
  }
  await generatePages('allWordpressWpCategory', 'categories', 'category.js')
  await generatePages('allWordpressWpPostTag', 'tags', 'tag.js')
  const posts = await fetchType('allWordpressWpBlogPost')
  const postTemplate = path.resolve('./src/templates/blog-post.js')
  posts.forEach(({ node: { id, slug } }) => {
    const path = `/blog/${slug}`
    const context = {
      id,
      slug,
    }
    createPage({
      path,
      component: postTemplate,
      context,
    })
  })
}
