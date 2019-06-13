import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Flex from 'elements/flex'
import Link from 'components/link'

const Categories = () => {
  const data = useStaticQuery(graphql`
    query Categories {
      allWordpressCategory {
        node {
          id
          name
          slug
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
      {data.allWordpressCategory.node.map(category => (
        <Link
          color="text.primary"
          fontWeight="bold"
          key={category.id}
          to={`/categories/${category.slug}`}
          textTransform="capitalize"
          fontFamily="serif"
          fontSize={2}
          mr={4}
        >
          {category.name}
        </Link>
      ))}
    </Flex>
  )
}

export default Categories
