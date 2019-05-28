import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

import Text from 'elements/text'
import Img from 'elements/img'
import Flex from 'elements/flex'
import Box from 'elements/box'

const Item = styled(Box)`
  display: inline-block;
  vertical-align: top;
`

const GuestService = ({ image, body, name }) => (
  <Flex alignItems="center" as="li" mb={2}>
    <Item>
      <Img radius={3} fixed={image.childImageSharp.fixed} />
    </Item>
    <Item ml={3}>
      <Text as="h4" variant="bold" mb={1} fontSize={5}>
        {name}
      </Text>
      <Text as="p" color="text.secondary" fontWeight="medium" mb={3}>
        {body}
      </Text>
    </Item>
  </Flex>
)

export const query = graphql`
  fragment GuestService on GuestServicesJson {
    image {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    body
    name
    id
  }
`

GuestService.propTypes = {
  body: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
}

export default GuestService
