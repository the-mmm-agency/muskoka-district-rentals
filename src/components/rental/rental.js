import React from 'react'
import { css } from '@xstyled/emotion'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Box from 'components/box'
import Link from 'components/link'
import { transition } from 'theme/transitions'

const Rental = ({ title, lowestRate, featured_media, onMouseOver, slug }) => (
  <Link to={`/cottages/${slug}`}>
    <li
      css={css`
        &:hover {
          opacity: 1;
        }
        display: flex;
        color: white;
        flex-direction: column;
        margin: 3;
        text-align: left;
        opacity: 0.5;
        ${transition('opacity')};
      `}
      onMouseOver={onMouseOver}
      onFocus={onMouseOver}
    >
      <Box as="span" fontWeight="medium">
        Starting from <strong color="white">${lowestRate}</strong>/Night
      </Box>
      <Img
        css={css`
          my: 2;
          width: 210px;
          height: 130px;
          position: relative;
        `}
        fluid={featured_media.localFile.childImageSharp.fluid}
      />
      <Box as="span" fontFamily="serif" variant="bold" fontSize={5}>
        {title}
      </Box>
    </li>
  </Link>
)

export const query = graphql`
  fragment Rental on wordpress__wp_mphb_room_type {
    id
    title
    slug
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
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Rental
