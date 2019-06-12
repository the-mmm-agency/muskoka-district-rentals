import { graphql } from 'gatsby'
import React from 'react'

import Breadcrumb from 'components/breadcrumb'
import Flex from 'elements/flex'
import Categories from 'components/categories'
import PostCard from 'components/postCard'

const Blog = ({ data: { posts } }) => {
  return (
    <Flex bg="colors.background.default" p={5} flexDirection="column">
      <Flex alignItems="center" width="100%" flexDirection="column">
        <h1 textAlign="center" mb={1}>
          The latest news
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
          ]}
        />
      </Flex>
      <Categories />
      <Flex alignItems="center" py={2} px={6}>
        {posts.edges.map(edge => (
          <PostCard key={edge.node.id} {...edge.node} />
        ))}
      </Flex>
    </Flex>
  )
}

export const pageQuery = graphql`
  query BlogPage {
    posts: allWordpressPost(limit: 6, sort: { fields: date, order: DESC }) {
      edges {
        node {
          ...PostCard
        }
      }
    }
  }
`

export default Blog
