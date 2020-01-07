import styled, { css } from '@xstyled/emotion';
import Img, { FluidObject } from 'gatsby-image';
import React, { FC } from 'react';

import ProductionLink from 'components/productionLink/index';
import Flex from 'elements/flex';
import Text from 'elements/text';
import { transition } from 'theme/transitions';

const Root = styled(Flex)`
  &:hover {
    opacity: 1;
  }
  flex-direction: column;
  margin: 3;
  color: white;
  text-align: left;
  opacity: 0.5;
  ${transition('opacity')};
`;

const RentalImg = styled(Img)`
  position: relative;
  width: 210px;
  height: 130px;
  margin: 2 0;
`;

interface Image {
  childImageSharp: {
    fluid: FluidObject;
  };
}
interface RentalProps {
  featured_media: {
    localFile: Image;
  };
  onMouseOver: () => void;
  price: string;
  slug: string;
  title: string;
}

const Rental: FC<RentalProps> = ({
  title,
  price,
  featured_media,
  onMouseOver,
  slug,
}) => (
  <Root onMouseOver={onMouseOver} onFocus={onMouseOver}>
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
      <RentalImg fluid={featured_media.localFile.childImageSharp.fluid} />
      <Text
        dangerouslySetInnerHTML={{ __html: title }}
        fontFamily="serif"
        fontWeight="bold"
        fontSize={5}
      />
    </ProductionLink>
  </Root>
);

export default Rental;
