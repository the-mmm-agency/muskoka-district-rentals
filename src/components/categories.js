import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Flex from 'elements/flex'
import Link from 'components/link'

const Categories = () => {
  const data = useStaticQuery(graphql`
    query Categories {
      allMarkdownRemark {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
    }
  `)
  return (
    <Flex
      alignItems="center"
      mt={4}
      mb={3}
      justifyContent="center"
      width="100%"
    >
      <Link
        to="/blog"
        color="text.primary"
        fontWeight="bold"
        textTransform="capitalize"
        fontFamily="serif"
        fontSize={2}
        mr={4}
      >
        All
      </Link>
      {data.allMarkdownRemark.group.map(category => (
        <Link
          color="text.primary"
          fontWeight="bold"
          key={category.fieldValue}
          to={`/categories/${category.fieldValue}`}
          textTransform="capitalize"
          fontFamily="serif"
          fontSize={2}
          mr={4}
        >
          {category.fieldValue}
        </Link>
      ))}
    </Flex>
  )
}

export default Categories
