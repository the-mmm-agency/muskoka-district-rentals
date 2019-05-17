import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { themeGet } from 'styled-system'

import Flex from 'elements/flex'
import Text from 'elements/text'
import transitions from 'theme/transitions'

const Wrapper = styled(Flex)`
  &:hover {
    opacity: 1;
  }
  opacity: 0.5;
  transition: ${transitions.create('opacity')};
`

const RentalImg = styled(Img)`
  width: 210px;
  height: 130px;
  position: relative;
  margin: ${themeGet('space.2')} 0;
`

const Rental = ({ image, name, startFrom, onMouseOver }) => {
  return (
    <Wrapper
      display="flex"
      color="white"
      flexDirection="column"
      m={3}
      as="li"
      textAlign="left"
      onMouseOver={onMouseOver}
      onFocus={onMouseOver}
    >
      <Text fontWeight="medium">
        Starting from <strong>${startFrom}</strong>/Night
      </Text>
      <RentalImg fluid={image.childImageSharp.fluid} />
      <Text fontFamily="serif" variant="bold" fontSize="1.4rem">
        {name}
      </Text>
    </Wrapper>
  )
}

export const query = graphql`
  fragment Rental on RentalsJson {
    id
    name
    image {
      childImageSharp {
        fluid(maxWidth: 9000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    startFrom
  }
`

Rental.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  startFrom: PropTypes.number.isRequired,
}

export default Rental
