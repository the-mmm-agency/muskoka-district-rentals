import React from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'
import Img from 'gatsby-image'

import Number from 'components/number'
import { scale, rhythm } from 'utils/typography'
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
`
const H2 = styled.h2`
  width: 100%;
`

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${rhythm(2)};
  width: 33%;
`

const PrimaryText = styled.span`
  color: ${palette.text.primary};
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
`

const UprightText = styled.span`
  writing-mode: vertical-lr;
  text-orientation: upright;
`

const StartFrom = styled.span`
  ${scale(1 / 2)};
  color: ${palette.text.secondary};
`
const Price = styled.span`
  font-weight: 500;
  ${scale(3 / 4)}
`

const Night = styled.span`
  ${scale(1 / 2)};
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
        {reviewCount} reviews
      </Rating>
      <H2>{name}</H2>
      <StartFrom>Start from </StartFrom>
      <Price>{' ' + startFrom}</Price>
      <Night>/Night</Night>
      <p>{description}</p>
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
    </Info>
    <Image fluid={image.childImageSharp.fluid} />
  </Wrapper>
)

export default Cottage
