import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { css } from '@xstyled/emotion'
import React from 'react'
import { BadgeCheck as Check } from 'styled-icons/boxicons-regular/BadgeCheck'

import Box from 'components/box'
import Flex from 'components/flex'
import Heading from 'components/heading'
import Text from 'components/text'

const Amenities = ({ amenities }) => {
  const categories = amenities.filter(
    amenity => amenity.parent_element === null
  )

  const list = categories.map(category => ({
    category,
    amenities: amenities.filter(
      amenity =>
        amenity.parent_element !== null &&
        amenity.parent_element.name === category.name
    ),
  }))
  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start"
      ml={{ xs: 2, md: 4, lg: 5 }}
    >
      {list.map(({ category, amenities }) => (
        <Box key={category}>
          <Heading as="h5" textAlign="left" my={4}>
            <div dangerouslySetInnerHTML={{ __html: category.name }} />
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
  fragment Amenities on wordpress__wp_listing {
    amenities {
      name
      parent_element {
        name
      }
    }
  }
`

export default Amenities
