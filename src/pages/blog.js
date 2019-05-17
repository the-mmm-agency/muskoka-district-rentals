import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

import Flex from 'elements/flex'
import Text from 'elements/text'
import Categories from 'components/categories'
import PostCard from 'components/postCard'

const Blog = ({ location }) => {
  const data = useStaticQuery(graphql`
    query BlogPage {
      posts: allMarkdownRemark(
        limit: 6
        sort: { fields: [fields__date], order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              image {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Flex bg="colors.background.default" px={5} py={2}>
      <Flex alignItems="center">
        <Text as="h1" textAlign="center">
          The latest news
        </Text>
        <Breadcrumb location={location} crumbLabel="Blog" />
      </Flex>
      <Categories />
      <Flex alignItems="center">
        {data.posts.edges[0].map(postEdge => (
          <PostCard key={postEdge.node.title} {...postEdge.node} />
        ))}
      </Flex>
    </Flex>
  )
}

export default Blog
