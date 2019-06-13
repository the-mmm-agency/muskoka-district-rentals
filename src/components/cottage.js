import React from 'react'
import styled from '@emotion/styled'
import StarRatings from 'react-star-ratings'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import css from '@styled-system/css'
import PropTypes from 'prop-types'
import { themeGet } from 'styled-system'
import { ifProp } from 'styled-tools'

import Hidden from 'components/hidden'
import Number from 'components/number'
import Button from 'components/button'
import CottageInfo from 'components/cottageInfo'
import palette from 'theme/palette'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media screen and (min-width: ${themeGet('breakpoints.0', '200px')}) {
    flex-direction: ${ifProp('reverse', 'row', 'row-reverse')};
    justify-content: ${ifProp('reverse', 'flex-start', 'flex-end')};
    text-align: ${ifProp('reverse', 'left', 'right')};
  }
`

const Cottage = ({
  capacity,
  content,
  title,
  categories,
  suitability,
  featured_media,
  bed,
  lowestRate,
  size,
  reviewAvg,
  reviewCount,
  number,
}) => (
  <Wrapper reverse={number % 2 === 0} mx={2} my={3}>
    <Hidden down={2}>
      <div
        css={css({
          alignItems: 'center',
          border: '1px solid',
          borderColor: 'text.secondary',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          maxHeight: '350px',
          mt: 0,
          mx: 5,
          p: 4,
        })}
      >
        <span
          css={{
            fontWeight: 'bold',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            writingMode: 'vertical-lr',
          }}
        >
          Test
        </span>
        <Number color="text.secondary" fontWeight="bold" fontSize={4}>
          {number + 1}
        </Number>
      </div>
    </Hidden>
    <div
      css={css({
        display: 'flex',
        flexShrink: 0,
        flexWrap: 'wrap',
        justifyContent: 'inherit',
        p: 2,
        pt: 0,
        width: ['100%', '50%', 'calc(100% / 3)'],
      })}
    >
      <div mb={3}>
        <StarRatings
          rating={reviewAvg}
          starRatedColor={palette.starRated}
          numberOfStars={5}
          starSpacing="1px"
          starDimension="1rem"
          name="rating"
        />{' '}
        <span fontWeight="medium" ml="1px">
          {reviewCount} reviews
        </span>
      </div>
      <h2 fontSize={1} mb={4} lineHeight="expanded" width="100%">
        {title}
      </h2>
      <span fontWeight="semibold" fontSize={5} pt={2}>
        Start from{' '}
      </span>
      <span
        fontSize={3}
        lineHeight={1.2}
        ml={1}
        color="text.primary"
        fontWeight="bold"
      >
        {' $' + lowestRate}
      </span>
      <span color="text.primary" fontWeight="semibold" fontSize={5} mt="auto">
        /Night
      </span>
      <div
        css={{
          maxHeight: '200px',
          maxWidth: '90%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          wordWrap: 'normal',
        }}
        color="text.paragraph"
        mt={4}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <CottageInfo
        attributes={[
          {
            name: 'Square Feet',
            value: `${size} sqft`,
          },
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
          {
            name: 'Pet Friendly',
            value:
              suitability.filter(s => s.name === 'pets').length !== 0
                ? 'Yes'
                : 'No',
          },
        ]}
      />
      <Button ml="-1rem" variant="transparent">
        Book now &nbsp;&rsaquo;
      </Button>
    </div>
    <Img
      css={css({
        alignSelf: 'flex-start',
        flexGrow: 1,
        flexShrink: 1,
        width: ['100%', '50%'],
        mb: 4,
      })}
      imgStyle={{
        objectFit: 'contain',
      }}
      fluid={featured_media.localFile.childImageSharp.fluid}
    />
  </Wrapper>
)

export const query = graphql`
  fragment Cottage on wordpress__wp_mphb_room_type {
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
    suitability {
      name
    }
    bed
    capacity
    lowestRate
    content
    size
    title
  }
`

Cottage.propTypes = {
  bed: PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  content: PropTypes.string.isRequired,
  featured_media: PropTypes.object.isRequired,
  lowestRate: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  reviewAvg: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  suitability: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string.isRequired,
}

export default Cottage
