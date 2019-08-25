// import { graphql } from 'gatsby'
import React from 'react'

import BlogTemplate from 'templates/blog'

const Category = ({ data, pageContext: { slug } }) => (
  <BlogTemplate
    data={data}
    title={slug}
    crumbs={[{ title: slug, link: slug }]}
  />
)

// export const query = graphql`
//   query CategoryPage($slug: String) {
//     allWordpressWpBlogPost(
//       sort: { fields: date, order: DESC }
//       filter: { category: { slug: { eq: $slug } } }
//     ) {
//       nodes {
//         ...PostCard
//       }
//     }
//   }
// `

export default Category
