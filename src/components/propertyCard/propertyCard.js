import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Card, { CardContent } from 'components/card'
import CottageInfo from 'components/cottageInfo'
import StarRating from 'components/starRating'
import Link from 'components/link'
import Text from 'components/text'

const PropertyCard = ({
  beds,
  featured_media,
  guests,
  listing_type,
  night_price,
  reviewAvg,
  slug,
  title,
}) => (
  <Card>
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
      <CottageInfo
        attributes={[
          {
            name: 'Property',
            value: listing_type.name,
          },
          {
            name: 'Sleeps',
            value: guests,
          },
          {
            name: 'Beds',
            value: beds,
          },
        ]}
      />
      <hr />
      <span css={{ display: 'inline-flex' }}>
        <Link to={`/cottages/${slug}`}>Details</Link>
        <Text ml="auto">
          Starting at <b>${night_price}/</b>Night
        </Text>
      </span>
    </CardContent>
  </Card>
)

PropertyCard.propTypes = {
  beds: PropTypes.string.isRequired,
  featured_media: PropTypes.object.isRequired,
  guests: PropTypes.string.isRequired,
  listing_type: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  night_price: PropTypes.number.isRequired,
  reviewAvg: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export const query = graphql`
  fragment PropertyCard on wordpress__wp_listing {
    id
    beds
    night_price
    guests
    slug
    title
    listing_type {
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

export default PropertyCard
