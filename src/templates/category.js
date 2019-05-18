import React from 'react'
import { graphql } from 'gatsby'

import Breadcrumb from 'components/breadcrumb'
import Flex from 'elements/flex'
import Text from 'elements/text'
import Categories from 'components/categories'
import PostCard from 'components/postCard'

const Category = ({ data, pageContext }) => (
  <Flex bg="colors.background.default" p={5} flexDirection="column">
    <Flex alignItems="center" width="100%" flexDirection="column">
      <Text as="h1" textAlign="center" textTransform="capitalize" mb={1}>
        {pageContext.category}
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
          {
            link: `/categories/${pageContext.category}`,
            title: pageContext.category,
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

export const query = graphql`
  query CategoryPage($category: String) {
    posts: allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Category