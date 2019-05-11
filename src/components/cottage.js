import React from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import Number from 'components/number'
import { scale, rhythm } from 'theme/typography'
import palette from 'theme/palette'

const Wrapper = styled.div`
  background: ${palette.background.default};
  display: flex;
  flex-direction: ${properties => (properties.reverse ? 'row' : 'row-reverse')};
  margin: 5rem 0;
`

const Box = styled.div`
  border: 1px solid #1e1e1e;
  padding: ${rhythm(1)};
  margin: ${rhythm(4)};
  margin-top: 0;
  max-height: 350px;
`

const Rating = styled.div`
  margin: ${rhythm(1)} 0;
  margin-top: 0;
`

const RatingText = styled.div`
  display: inline-block;
  margin-left: 10px;
  margin-top: 1px;
  font-weight: 500;
  font-size: 16px;
`

const H2 = styled.h2`
  width: 100%;
  color: #000;
  ${scale(0.8)}
`

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${rhythm(2)};
  padding-top: 0;
  width: 33%;
`

const PrimaryText = styled.span`
  color: ${palette.text.primary};
  font-weight: 500;
`

const SecondaryText = styled.span`
  color: ${palette.secondary};
`

const Image = styled(Img)`
  width: 40%;
`

const Properties = styled.ul`
  color: ${palette.text.secondary};
  font-weight: 500;
  margin-left: 0;
`

const ViewDetails = styled.a`
  width: 100%;
  text-align: left;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
`

const UprightText = styled.span`
  writing-mode: vertical-lr;
  text-orientation: upright;
`

const StartFrom = styled.span`
  ${scale(1 / 10)};
  color: ${palette.text.secondary};
  font-weight: 500;
  padding-top: 15px;
`
const Price = styled.span`
  ${scale(2 / 3)}
  font-weight: 500;
  margin: 0 ${rhythm(1 / 4)};
  min-width: 90px;
  text-align: center;
`

const Night = styled.span`
  ${scale(1 / 10)};
  font-weight: 500;
  padding-top: 15px;
`

const Description = styled.p`
  margin-top: 20px;
`

const StyledNumber = styled(Number)`
  font-weight: 600;
  ${scale(1 / 2)};
`

const Cottage = ({
  name,
  reviewAvg,
  address,
  reviewCount,
  startFrom,
  description,
  status,
  squareFeet,
  property,
  sleeps,
  beds,
  bathrooms,
  petFriendly,
  image,
  number,
}) => (
  <Wrapper reverse={number % 2 === 0}>
    <Box>
      <UprightText>{address}</UprightText>
      <StyledNumber>{number + 1}</StyledNumber>
    </Box>
    <Info>
      <Rating>
        <StarRatings
          rating={reviewAvg}
          starRatedColor="#f4d942"
          numberOfStars={5}
          starSpacing="1px"
          starDimension="20px"
          name="rating"
        />{' '}
        <RatingText>{reviewCount} reviews</RatingText>
      </Rating>
      <H2>{name}</H2>
      <StartFrom>Start from </StartFrom>
      <Price>{' $' + startFrom}</Price>
      <Night>/Night</Night>
      <Description>{description}</Description>
      <Properties>
        <li>
          Status:{' '}
          {status === 'Available' ? (
            <SecondaryText>Available</SecondaryText>
          ) : (
            'Unavailable'
          )}
        </li>
        <li>
          Square Feet: <PrimaryText>{squareFeet}</PrimaryText>
        </li>
        <li>
          Property: <PrimaryText>{property}</PrimaryText>
        </li>
        <li>
          Sleeps: <PrimaryText>{sleeps}</PrimaryText>
        </li>
        <li>
          Beds: <PrimaryText>{beds}</PrimaryText>
        </li>
        <li>
          Bathrooms: <PrimaryText>{bathrooms}</PrimaryText>
        </li>
        <li>
          Pet Friendly: <PrimaryText>{petFriendly ? 'Yes' : 'No'}</PrimaryText>
        </li>
      </Properties>
      <ViewDetails href="/">View Detail &nbsp;&rsaquo;</ViewDetails>
    </Info>
    <Image fluid={image.childImageSharp.fluid} />
  </Wrapper>
)

Cottage.propTypes = {
  address: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  beds: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  petFriendly: PropTypes.bool.isRequired,
  property: PropTypes.string.isRequired,
  reviewAvg: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  sleeps: PropTypes.number.isRequired,
  squareFeet: PropTypes.number.isRequired,
  startFrom: PropTypes.number.isRequired,
  status: PropTypes.oneOf(['available', 'unavailable']).isRequired,
}

export default Cottage
