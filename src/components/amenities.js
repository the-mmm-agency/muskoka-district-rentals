import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import themeGet from '@styled-system/theme-get'

import { ReactComponent as Check } from 'icons/check-circle.svg'

const distinct = (value, index, self) => self.indexOf(value) === index

const Amenities = ({ amenities }) => {
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
                <Check
                  css={{
                    stroke: themeGet('colors.text.primary'),
                    width: '1em',
                    height: '1em',
                    marginTop: '-0.25em',
                  }}
                />
                <span ml={1} fontWeight="bold" whiteSpace="nowrap">
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
