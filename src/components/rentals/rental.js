import React from 'react'
import { css } from '@xstyled/emotion'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import Link from 'components/link'
import Flex from 'components/flex'
import Text from 'components/text'
import { transition } from 'theme/transitions'

const Rental = ({ title, price, featured_media, onMouseOver, slug }) => (
  <Flex
    css={css`
      &:hover {
        opacity: 1;
      }
      flex-direction: column;
      margin: 3;
      color: white;
      text-align: left;
      opacity: 0.5;
      ${transition('opacity')};
    `}
    onMouseOver={onMouseOver}
    onFocus={onMouseOver}
  >
    <Link to={`/cottages/${slug}`}>
      <Text fontWeight="medium">
        Starting from <strong color="white">${price}</strong>/Night
      </Text>
      <Img
        css={css`
          position: relative;
          width: 210px;
          height: 130px;
          margin: 2 0;
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
  </Flex>
)

Rental.propTypes = {
  featured_media: PropTypes.object.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  price: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Rental
