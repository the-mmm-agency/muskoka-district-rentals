import React from 'react'
import css from '@styled-system/css'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import transitions from 'theme/transitions'

const Rental = ({ title, lowestRate, featured_media, onMouseOver }) => (
  <li
    css={css({
      ':hover': {
        opacity: 1,
      },
      display: 'flex',
      color: 'white',
      flexDirection: 'column',
      m: 3,
      textAlign: 'left',
      opacity: 0.5,
      transition: transitions.create('opacity'),
    })}
    onMouseOver={onMouseOver}
    onFocus={onMouseOver}
  >
    <span fontWeight="medium">
      Starting from <strong color="white">${lowestRate}</strong>/Night
    </span>
    <Img
      css={css({
        my: 2,
        width: 210,
        height: 130,
        position: 'relative',
      })}
      fluid={featured_media.localFile.childImageSharp.fluid}
    />
    <span fontFamily="serif" variant="bold" fontSize={5}>
      {title}
    </span>
  </li>
)

export const query = graphql`
  fragment Rental on wordpress__wp_mphb_room_type {
    id
    title
    featured_media {
      localFile {
        childImageSharp {
          fluid(maxWidth: 4160) {
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
