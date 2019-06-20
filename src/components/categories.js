import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Box from 'components/box'
import Link from 'components/link'

const Categories = () => {
  const data = useStaticQuery(graphql`
    query Categories {
      allWordpressCategory {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
  `)
  return (
    <Box
      display="flex"
      alignItems="center"
      mt={4}
      mb={3}
      justifyContent="center"
      width="100%"
    >
      <Link
        to="/blog"
        color="textPrimary"
        fontWeight="bold"
        textTransform="capitalize"
        fontFamily="serif"
        fontSize={2}
        mr={4}
      >
        All
      </Link>
      {data.allWordpressCategory.edges.map(category => (
        <Link
          color="textPrimary"
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
    </Box>
  )
}

export default Categories
