import { graphql } from 'gatsby'
import { css } from '@xstyled/emotion'
import React from 'react'

import Breadcrumb from 'components/breadcrumb'
import Categories from 'components/categories'
import PostCard from 'components/postCard'

const Category = ({ data, pageContext }) => (
  <div
    css={css`
      display: flex;
      background-color: backgroundDefault;
      padding: 5;
      flex-direction: column;
      div {
        display: flex;
        align-items: center;
        &:last-child {
          padding: 2 6;
        }
      }
    `}
  >
    <div
      css={css`
        width: 100%;
        h1 {
          text-align: center;
          text-transform: capitalize;
          margin-bottom: 1;
        }
      `}
    >
      <h1>{pageContext.category}</h1>
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
    <div>
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
