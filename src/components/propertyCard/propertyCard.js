import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

import Flex from 'components/flex'
import CottageInfo from 'components/cottageInfo'
import StarRating from 'components/starRating'
import Link from 'components/link'
import Text from 'components/text'
import { transition } from 'theme/transitions'

const Wrapper = styled(Flex)`
  &:hover {
    box-shadow: 25;
    transform: translateY(-3px);
    text-decoration: none;
    div a {
      color: textPrimary;
    }
  }
  flex-direction: column;
  box-shadow: 1;
  cursor: pointer;
  background-color: backgroundLight;
  text-decoration: none;
  ${transition(['transform', 'box-shadow'])};
  & > div {
    .star-ratings {
      margin-bottom: 2;
    }
    display: flex;
    height: 40%;
    flex-direction: column;
    padding: 3 4;
    text-align: left;
    ul {
      margin-top: 0;
    }
    a {
      &:hover {
        text-decoration: none;
      }
      font-weight: bold;
      ${transition('color')};
    }
    span {
      color: textLight;
    }
    h6 {
      margin-bottom: 0;
    }
  }
`

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
  <Link to={`/cottages/${slug}`}>
    <Wrapper width={{ xs: '100%', sm: 'calc(100% / 3)' }}>
      <Img fluid={featured_media.localFile.childImageSharp.fluid} />
      <Flex flexDirection="column">
        <h6>{title}</h6>
        <StarRating
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
          <b>Details</b>
          <Text ml="auto">
            Starting at <b>${lowestRate}/</b>Night
          </Text>
        </span>
      </Flex>
    </Wrapper>
  </Link>
)

PropertyCard.propTypes = {
  bed: PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
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
    bed
    capacity
    lowestRate
    slug
    title
  }
`

export default PropertyCard
