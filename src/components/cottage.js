import React from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'
import Img from 'gatsby-image'

import Number from 'components/number'
import { scale, rhythm } from 'theme/typography'
import palette from 'theme/palette'

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.reverse ? 'row' : 'row-reverse')};
  margin: ${rhythm(2)};
`

const Box = styled.div`
  border: 1px solid #1e1e1e;
  padding: ${rhythm(2)};
  margin: ${rhythm(4)};
`

const Rating = styled.div`
  margin: ${rhythm(1)} 0;
  margin-top: 0;
`

const RatingText = styled.div`
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  vertical-align: text-bottom;
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
  width: 33%;
`

const Properties = styled.ul`
  color: ${palette.text.secondary};
  list-style: none;
  margin-left: 0;
`

const ViewDetails = styled.a`
  width: 100%;
  text-align: left;
  color: #000;
  font-size: 14px;
  text-decoration: none;
`

const UprightText = styled.span`
  writing-mode: vertical-lr;
  text-orientation: upright;
`

const StartFrom = styled.span`
  ${scale(0.1)};
  color: ${palette.text.secondary};
  padding-top: 15px;
`
const Price = styled.span`
  font-weight: 500;
  ${scale(0.4)}
  line-height: 1.875;
  min-width: 90px;
  text-align: center;
`

const Night = styled.span`
  ${scale(0.1)};
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
  isAvailable,
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
      <StartFrom>Start from: </StartFrom>
      <Price>{' $' + startFrom}</Price>
      <Night>/Night</Night>
      <Description>{description}</Description>
      <Properties>
        <li>
          Status:{' '}
          {isAvailable ? (
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

export default Cottage
