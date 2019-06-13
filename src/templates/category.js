import { graphql } from 'gatsby'
import React from 'react'

import Breadcrumb from 'components/breadcrumb'
import Categories from 'components/categories'
import PostCard from 'components/postCard'

const Category = ({ data, pageContext }) => (
  <div
    display="flex"
    bg="colors.background.default"
    p={5}
    flexDirection="column"
  >
    <div display="flex" alignItems="center" width="100%" flexDirection="column">
      <h1 textAlign="center" textTransform="capitalize" mb={1}>
        {pageContext.category}
      </h1>
      <Breadcrumb
        mb={4}
        crumbs={[
          {
            link: '/',
            title: 'Home',
          },
          {
            link: '/blog',
            title: 'Blog',
          },
          {
            link: `/categories/${pageContext.category}`,
            title: pageContext.category,
          },
        ]}
      />
    </div>
    <Categories />
    <div display="flex" alignItems="center" py={2} px={6}>
      {data.posts.edges.map(edge => (
        <PostCard key={edge.node.id} {...edge.node} />
      ))}
    </div>
  </div>
)

export const query = graphql`
  query CategoryPage($slug: String) {
    posts: allWordpressWpBlogPosts(
      sort: { fields: date, order: DESC }
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      edges {
        node {
          ...PostCard
        }
      }
    }
  }
`

export default Category
