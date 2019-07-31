import { graphql } from 'gatsby'
import React from 'react'

import BlogTemplate from 'templates/blog'

const Blog = ({ data }) => <BlogTemplate data={data} title="The latest news" />

export const query = graphql`
  query BlogPage {
    allWordpressWpBlogPosts(sort: { fields: date, order: DESC }) {
      nodes {
        ...PostCard
      }
    }
  }
`

export default Blog
