import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Flex from 'elements/flex'
import Link from 'components/link'

const Categories = () => {
  const data = useStaticQuery(graphql`
    query Categories {
      allMarkdownRemark(limit: 1000) {
        group(field: frontmatter__categories) {
          fieldValue
        }
      }
    }
  `)
  return (
    <Flex alignItems="center" justifyContent="center" width="100%">
      <Link
        to="/blog"
        textTransform="capitalize"
        fontFamily="serif"
        fontSize={2}
        mr={2}
      >
        All
      </Link>
      {data.allMarkdownRemark.group.map(category => (
        <Link
          key={category.fieldValue}
          to={`/categories/${category.fieldValue}`}
          textTransform="capitalize"
          fontFamily="serif"
          fontSize={2}
          mr={2}
        >
          {category.fieldValue}
        </Link>
      ))}
    </Flex>
  )
}

export default Categories
