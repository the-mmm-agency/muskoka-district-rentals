import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { css } from '@xstyled/emotion'
import React from 'react'

import Box from 'components/box'
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
      <Box as="h3">Amenities</Box>
      {list.map(({ category, amenities }) => (
        <Box key={category}>
          <Box as="h5" textAlign="left" my={4}>
            {category}:
          </Box>
          <Box display="flex" flexWrap="wrap">
            {amenities.map(amenity => (
              <Box
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
                  css={css`
                    stroke: textPrimary;
                    width: 1em;
                    height: 1em;
                    margin-top: -0.25em;
                  `}
                />
                <Box as="span" ml={1} fontWeight="bold" whiteSpace="nowrap">
                  {amenity.name}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
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
