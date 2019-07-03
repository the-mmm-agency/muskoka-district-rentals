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
  slug,
  bed,
  capacity,
  categories,
  featured_media,
  lowestRate,
  reviewAvg,
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
            value: categories[0].name,
          },
          {
            name: 'Sleeps',
            value: capacity,
          },
          {
            name: 'Beds',
            value: bed,
          },
        ]}
      />
      <hr />
      <span css={{ display: 'inline-flex' }}>
        <Link to={`/cottages/${slug}`}>Details</Link>
        <Text ml="auto">
          Starting at <b>${lowestRate}/</b>Night
        </Text>
      </span>
    </CardContent>
  </Card>
)

PropertyCard.propTypes = {
  bed: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  featured_media: PropTypes.object.isRequired,
  lowestRate: PropTypes.number.isRequired,
  reviewAvg: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export const query = graphql`
  fragment PropertyCard on wordpress__wp_mphb_room_type {
    featured_media {
      localFile {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    categories {
      name
    }
    id
    bed
    capacity
    lowestRate
    slug
    title
  }
`

export default PropertyCard
