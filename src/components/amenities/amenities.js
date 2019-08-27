import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { css } from '@xstyled/emotion'
import React from 'react'
import { BadgeCheck as Check } from 'styled-icons/boxicons-regular/BadgeCheck'

import Flex from 'components/flex'
import Text from 'components/text'

const Amenities = ({ amenities }) => (
  <Flex
    flexDirection="column"
    alignItems="flex-start"
    ml={{ xs: 2, md: 4, lg: 5 }}
  >
    {amenities.map(({ id, name }) => (
      <Flex
        display="inline-flex"
        flexGrow={0}
        flexShrink={0}
        alignItems="center"
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
          <div dangerouslySetInnerHTML={{ __html: name }} />
        </Text>
      </Flex>
    ))}
  </Flex>
)

Amenities.propTypes = {
  amenities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export const query = graphql`
  fragment Amenities on wordpress__wp_property {
    amenities {
      id
      name
    }
  }
`

export default Amenities
