import { graphql } from 'gatsby'
import { css } from '@xstyled/emotion'
import React from 'react'

import Box from 'components/box'
import Heading from 'components/heading'
import Breadcrumb from 'components/breadcrumb'
import Categories from 'components/categories'
import PostCard from 'components/postCard'

const Blog = ({ data: { posts } }) => {
  return (
    <Box
      css={css`
        div {
          display: flex;
          align-items: center;
        }
        flex-direction: column;
        padding: 5;
        background-color: backgroundDefault;
      `}
    >
      <Box alignItems="center" width="100%" flexDirection="column">
        <Heading as="h1" textAlign="center" mb={1}>
          The latest news
        </Heading>
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
      </Box>
      <Categories />
      <Box py={2} px={6}>
        {posts.edges.map(edge => (
          <PostCard key={edge.node.id} {...edge.node} />
        ))}
      </Box>
    </Box>
  )
}

export const query = graphql`
  query BlogPage {
    posts: allWordpressWpBlogPosts(
      limit: 6
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          ...PostCard
        }
      }
    }
  }
`

export default Blog
