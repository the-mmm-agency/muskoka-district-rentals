import { graphql } from 'gatsby'
import React from 'react'

import Box from 'components/box'
import Breadcrumb from 'components/breadcrumb'
import Categories from 'components/categories'
import PostCard from 'components/postCard'

const Category = ({ data, pageContext }) => (
  <Box
    display="flex"
    bg="colors.backgroundDefault"
    p={5}
    flexDirection="column"
  >
    <Box display="flex" alignItems="center" width="100%" flexDirection="column">
      <Box as="h1" textAlign="center" textTransform="capitalize" mb={1}>
        {pageContext.category}
      </Box>
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
    </Box>
    <Categories />
    <Box display="flex" alignItems="center" py={2} px={6}>
      {data.posts.edges.map(edge => (
        <PostCard key={edge.node.id} {...edge.node} />
      ))}
    </Box>
  </Box>
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
