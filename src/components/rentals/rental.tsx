import styled, { css } from '@xstyled/emotion'
import Img from 'gatsby-image'
import React, { FC } from 'react'
import { CottageCardFragment } from 'src/graphql-types'

import ProductionLink from 'components/productionLink/index'
import Flex from 'elements/flex'
import Text from 'elements/text'
import { transition } from 'theme/transitions'

const Root = styled(Flex)`
  &:hover {
    opacity: 1;
  }
  flex-direction: column;
  margin: 3;
  text-align: left;
  opacity: 0.8;
  ${transition('opacity')};
`;

const RentalImg = styled(Img)`
  position: relative;
  width: 210px;
  height: 130px;
  margin: 2 0;
`;

interface RentalProps extends CottageCardFragment {
  onMouseOver: () => void;
}

const Rental: FC<RentalProps> = ({
  title,
  price,
  picture,
  onMouseOver,
  slug,
}) => (
  <Root onMouseOver={onMouseOver} onFocus={onMouseOver}>
    <ProductionLink
      css={css`
        &:hover {
          text-decoration: none;
        }
        color: #000000;
      `}
      to={`/cottages/${slug}`}
    >
      <Text fontWeight="medium">
        Starting from <strong color="white">${price}</strong>/Night
      </Text>
      <RentalImg fluid={picture?.childImageSharp?.fluid} />
      <Text fontFamily="serif" fontWeight="bold" fontSize={5}>
        {title}
      </Text>
    </ProductionLink>
  </Root>
);

export default Rental;
