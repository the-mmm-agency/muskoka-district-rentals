import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { themeGet } from 'styled-system'

import transitions from 'theme/transitions'
import Flex from 'elements/flex'

const Wrapper = styled(Flex)`
  &:hover {
    opacity: 1;
  }
  opacity: 0.5;
  transition: ${transitions.create('opacity')};
`

const RentalImg = styled(Img)`
  position: relative;
  width: 210px;
  height: 130px;
  margin: ${themeGet('space.2')} 0;
`

const Rental = ({ title, lowestRate, featured_media, onMouseOver }) => {
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
      <span fontWeight="medium">
        Starting from <strong color="white">${lowestRate}</strong>/Night
      </span>
      <RentalImg fluid={featured_media.localFile.childImageSharp.fluid} />
      <span fontFamily="serif" variant="bold" fontSize={5}>
        {title}
      </span>
    </Wrapper>
  )
}

export const query = graphql`
  fragment Rental on wordpress__wp_mphb_room_type {
    id
    title
    featured_media {
      localFile {
        childImageSharp {
          fluid(maxWidth: 9000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    lowestRate
  }
`

Rental.propTypes = {
  featured_media: PropTypes.object.isRequired,
  lowestRate: PropTypes.number.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export default Rental
