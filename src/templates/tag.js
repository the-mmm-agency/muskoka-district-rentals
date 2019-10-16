import { graphql } from 'gatsby'
import React from 'react'

import BlogTemplate from 'templates/blog'

const Tag = ({ data, pageContext: { name, slug } }) => (
  <BlogTemplate
    data={data}
    title={name}
    crumbs={[{ title: name, link: slug }]}
  />
)

export const query = graphql`
  query TagPage($id: String!) {
    allWordpressWpBlogPost(
      sort: { fields: date, order: DESC }
      filter: { tags: { elemMatch: { id: { eq: $id } } } }
    ) {
      nodes {
        ...PostCard
      }
    }
  }
`

export default Tag
