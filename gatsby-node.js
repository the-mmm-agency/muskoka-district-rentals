const path = require(`path`)

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

  const posts = await fetchType(`allWordpressWpBlogPosts`)
  const categories = await fetchType(`allWordpressCategory`)
  const cottages = await fetchType(`allWordpressWpMphbRoomType`)

  posts.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}/`,
      component: path.resolve(`src/templates/blog-post.js`),
      context: {
        id: edge.node.id,
      },
    })
  })
  categories.forEach(({ node: cat }) => {
    createPage({
      path: `/categories/${cat.slug}/`,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        slug: cat.slug,
      },
    })
  })
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
