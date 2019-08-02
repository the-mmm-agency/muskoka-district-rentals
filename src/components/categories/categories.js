import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Wrapper, Category } from './categories.css'

import HorizontalScroll from 'components/horizontalScroll'

const Categories = () => {
  const {
    allWordpressCategory: { nodes: categories },
  } = useStaticQuery(graphql`
    query Categories {
      allWordpressCategory {
        nodes {
          id
          name
          slug
        }
      }
    }
  `)
  return (
    <Wrapper>
      <HorizontalScroll>
        <Category to="/blog">All</Category>
        {categories.map(category => (
          <Category key={category.id} to={`/categories/${category.slug}`}>
            {category.name}
          </Category>
        ))}
      </HorizontalScroll>
    </Wrapper>
  )
}

export default Categories
