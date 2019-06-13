import { graphql } from 'gatsby'
import css from '@styled-system/css'
import React from 'react'

import Breadcrumb from 'components/breadcrumb'
import Categories from 'components/categories'
import PostCard from 'components/postCard'

const Blog = ({ data: { posts } }) => {
  return (
    <div
      css={css({
        div: {
          alignItems: 'center',
          display: 'flex',
        },
        bg: 'colors.background.default',
        p: 5,
        flexDirection: 'column',
      })}
    >
      <div alignItems="center" width="100%" flexDirection="column">
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
      </div>
      <Categories />
      <div py={2} px={6}>
        {posts.edges.map(edge => (
          <PostCard key={edge.node.id} {...edge.node} />
        ))}
      </div>
    </div>
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
