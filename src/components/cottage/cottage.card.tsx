import ProductionLink from 'components/productionLink'
import Card, { CardContent } from 'elements/card'
import Text from 'elements/text'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'

import { css } from '@xstyled/emotion'

import CottageInfo from './cottage.info'
import StarRating from './cottage.rating'

const CottageCard = ({
  bedrooms,
  featured_media,
  guests,
  category,
  price,
  reviewAvg,
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
      <Img fluid={featured_media.localFile.childImageSharp.fluid} />
      <CardContent>
        <h6 dangerouslySetInnerHTML={{ __html: title }} />
        <StarRating
          padding={0}
          marginBottom={1}
          css={{ padding: 0 }}
          rating={reviewAvg}
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
)

CottageCard.propTypes = {
  bedrooms: PropTypes.string.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  featured_media: PropTypes.object.isRequired,
  guests: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  reviewAvg: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export const query = graphql`
  fragment CottageCard on wordpress__wp_property {
    id
    bedrooms
    price
    guests
    slug
    title
    category {
      name
    }
    featured_media {
      localFile {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export default CottageCard
