import ProductionLink from 'components/productionLink/index'
import Flex from 'elements/flex'
import Text from 'elements/text'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import { transition } from 'theme/transitions'

import { css } from '@xstyled/emotion'

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
    <ProductionLink
      css={css`
        &:hover {
          text-decoration: none;
        }
      `}
      to={`/properties/${slug}`}
    >
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
    </ProductionLink>
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