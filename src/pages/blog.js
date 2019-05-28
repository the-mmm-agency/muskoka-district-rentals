import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Breadcrumb from 'components/breadcrumb'
import Flex from 'elements/flex'
import Text from 'elements/text'
import Categories from 'components/categories'
import PostCard from 'components/postCard'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query BlogPage {
      posts: allMarkdownRemark(
        limit: 6
        sort: { fields: [fields___date], order: DESC }
      ) {
        edges {
          node {
            ...PostCard
          }
        }
      }
    }
  `)
  return (
    <Flex bg="colors.background.default" p={5} flexDirection="column">
      <Flex alignItems="center" width="100%" flexDirection="column">
        <Text as="h1" textAlign="center" mb={1}>
          The latest news
        </Text>
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
        {data.posts.edges.map(edge => (
          <PostCard key={edge.node.id} {...edge.node} />
        ))}
      </Flex>
    </Flex>
  )
}

export default Blog
