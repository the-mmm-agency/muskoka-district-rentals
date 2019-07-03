import React from 'react'
import { css } from '@xstyled/emotion'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import Link from 'components/link'
import Text from 'components/text'
import { transition } from 'theme/transitions'

const Rental = ({ title, lowestRate, featured_media, onMouseOver, slug }) => (
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
    <Link to={`/cottages/${slug}`}>
      <Text fontWeight="medium">
        Starting from <strong color="white">${lowestRate}</strong>/Night
      </Text>
      <Img
        css={css`
          margin: 2 0;
          width: 210px;
          height: 130px;
          position: relative;
        `}
        fluid={featured_media.localFile.childImageSharp.fluid}
      />
      <Text
        dangerouslySetInnerHTML={{ __html: title }}
        fontFamily="serif"
        fontWeight="bold"
        fontSize={5}
      />
    </Link>
  </li>
)

Rental.propTypes = {
  featured_media: PropTypes.object.isRequired,
  lowestRate: PropTypes.number.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Rental
