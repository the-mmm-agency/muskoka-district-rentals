import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import React from 'react'

const distinct = (value, index, self) => self.indexOf(value) === index

const Amenities = ({ amenities }) => {
  const { icon } = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "check.png" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  const categories = amenities
    .map(amenity => amenity.parent_element.name)
    .filter(distinct)

  const list = categories.map(category => ({
    category,
    amenities: amenities.filter(
      amenity => amenity.parent_element.name === category
    ),
  }))

  return (
    <>
      <h3>Amenities</h3>
      {list.map(({ category, amenities }) => (
        <div key={category}>
          <h5 textAlign="left" my={4}>
            {category}:
          </h5>
          <div display="flex" flexWrap="wrap">
            {amenities.map(amenity => (
              <div
                display="inline-flex"
                flexGrow={0}
                flexShrink={0}
                alignItems="center"
                mb={2}
                flexBasis="18rem"
                mr="1rem"
                key={amenity.name}
              >
                <Img
                  css={{ width: '1rem', height: '1rem' }}
                  fixed={icon.childImageSharp.fixed}
                />
                <span ml={2} fontWeight="bold" whiteSpace="nowrap">
                  {amenity.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

Amenities.propTypes = {
  amenities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      parent_element: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export const query = graphql`
  fragment Amenities on wordpress__wp_mphb_room_type {
    amenities {
      name
      parent_element {
        name
      }
    }
  }
`

export default Amenities
