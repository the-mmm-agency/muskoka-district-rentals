import { graphql } from 'gatsby'
import React from 'react'

import BlogTemplate from 'templates/blog'

const Category = ({ data, pageContext: { slug } }) => (
  <BlogTemplate
    data={data}
    title={slug}
    crumbs={[{ title: slug, link: slug }]}
  />
)

export const query = graphql`
  query CategoryPage($slug: String) {
    allWordpressWpBlogPosts(
      sort: { fields: date, order: DESC }
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      nodes {
        ...PostCard
      }
    }
  }
`

export default Category
