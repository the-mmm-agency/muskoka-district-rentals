import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { css } from '@xstyled/emotion'
import React from 'react'
import { BadgeCheck as Check } from 'styled-icons/boxicons-regular/BadgeCheck'

import structureAmenities from './structureAmenities'

import Box from 'components/box'
import Flex from 'components/flex'
import Heading from 'components/heading'
import Text from 'components/text'

const Amenities = ({ amenities }) => {
  const categories = structureAmenities(amenities)
  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start"
      ml={{ xs: 2, md: 4, lg: 5 }}
    >
      {categories.map(({ id, name, amenities }) => (
        <Box key={id}>
          <Heading as="h5" textAlign="left" my={4}>
            <div dangerouslySetInnerHTML={{ __html: name }} />
          </Heading>
          <Flex flexWrap="wrap">
            {amenities.map(({ id, name }) => (
              <Flex
                display="inline-flex"
                flexGrow={0}
                flexShrink={0}
                alignItems="center"
                mb={2}
                flexBasis="18rem"
                mr="1rem"
                key={id}
              >
                <Check
                  css={css`
                    width: 1em;
                    height: 1em;
                    margin-bottom: 0.25em;
                    stroke: textPrimary;
                  `}
                />
                <Text ml={1} fontWeight="bold" whiteSpace="nowrap">
                  {name}
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
  fragment Amenities on wordpress__wp_property {
    amenities {
      id
      name
      parent_element {
        id
        name
      }
    }
  }
`

export default Amenities
