import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { css } from '@xstyled/emotion'
import React from 'react'

import Box from 'components/box'
import Flex from 'components/flex'
import Heading from 'components/heading'
import Text from 'components/text'
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
    <Flex flexDirection="column" alignItems="flex-start">
      {list.map(({ category, amenities }) => (
        <Box key={category}>
          <Heading as="h5" textAlign="left" my={4}>
            {category}:
          </Heading>
          <Flex flexWrap="wrap">
            {amenities.map(amenity => (
              <Flex
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
                    margin-bottom: 0.25em;
                  `}
                />
                <Text ml={1} fontWeight="bold" whiteSpace="nowrap">
                  {amenity.name}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>
      ))}
    </Flex>
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