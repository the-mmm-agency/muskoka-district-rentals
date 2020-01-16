import { css } from '@xstyled/emotion'
import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import React, { FC } from 'react'

import CottageInfo from './cottage.info'
import StarRating from './cottage.rating'

import ProductionLink from 'components/productionLink'
import Card, { CardContent } from 'elements/card'
import Text from 'elements/text'

interface CottageCardProps {
  bedrooms: number;
  category: string;
  price: number;
  guests: number;
  slug: string;
  title: string;
  picture: { childImageSharp: { fluid: FluidObject } };
}

const CottageCard: FC<CottageCardProps> = ({
  bedrooms,
  picture,
  guests,
  category,
  price,
  slug,
  title,
}) => (
  <Card>
    <ProductionLink
      to={`properties/${slug}`}
      css={css`
        &:hover {
          text-decoration: none;
        }
      `}
    >
      <Img fluid={picture.childImageSharp.fluid} />
      <CardContent>
        <h6 dangerouslySetInnerHTML={{ __html: title }} />
        <StarRating
          padding={0}
          marginBottom={1}
          css={{ padding: 0 }}
          rating={5}
          starDimension="1rem"
        />
        <CottageInfo category={category} guests={guests} bedrooms={bedrooms} />
        <hr />
        <span css={{ display: 'inline-flex' }}>
          Details
          <Text ml="auto">
            Starting at <b>${price}/</b>Night
          </Text>
        </span>
      </CardContent>
    </ProductionLink>
  </Card>
);

export const query = graphql`
  fragment CottageCard on RentalsJson {
    id
    bedrooms
    price
    guests
    slug
    title
    category
    picture {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default CottageCard;
