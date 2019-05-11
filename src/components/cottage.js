import React from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import Number from 'components/number'
import Button from 'components/button'
import { scale, rhythm } from 'theme/typography'
import palette from 'theme/palette'

const Wrapper = styled.div`
  background: ${palette.background.default};
  display: flex;
  justify-content: ${props => (props.reverse ? 'flex-start' : 'flex-end')};
  text-align: ${props => (props.reverse ? 'left' : 'right')};
  flex-direction: ${props => (props.reverse ? 'row' : 'row-reverse')};
  margin: 5rem 0;
`

const Box = styled.div`
  border: 1px solid #1e1e1e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${rhythm(7 / 8)};
  margin: ${rhythm(3)};
  margin-top: 0;
  max-height: 350px;
`

const Rating = styled.div`
  margin: ${rhythm(1)} 0;
  margin-top: 0;
  span {
    margin-left: 1px;
    font-weight: 500;
  }
`

const Info = styled.div`
  h2 {
    width: 100%;
    ${scale(3 / 4)}
  }
  big {
    ${scale(2 / 3)};
    color: ${palette.text.primary};
    font-weight: bold;
    font-style: bold;
    margin: 0 ${rhythm(1 / 4)};
    min-width: 90px;
    text-align: center;
  }
  span {
    ${scale(1 / 10)};
    font-weight: 600;
    padding-top: 15px;
  }
  p {
    margin-top: 20px;
  }
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: inherit;
  padding: ${rhythm(2)};
  padding-top: 0;
  width: calc(100% / 3);
`

const ViewDetail = styled(Button)`
  margin-left: ${rhythm(-2 / 3)};
`

const PrimaryText = styled.span`
  color: ${palette.text.primary};
  font-style: bold;
  font-weight: bold;
`

const SecondaryText = styled.span`
  color: ${palette.secondary};
`

const Image = styled(Img)`
  min-width: 50%;
  max-height: 30vw;
  flex-grow: 1;
`

const Properties = styled.ul`
  li {
    margin-bottom: ${rhythm(1 / 5)};
  }
  font-weight: bold;
  font-style: bold;
  margin-left: 0;
  width: 100%;
`

const Address = styled.span`
  letter-spacing: 0.2em;
  font-weight: bold;
  font-style: bold;
  text-transform: uppercase;
  writing-mode: vertical-lr;
`

const StyledNumber = styled(Number)`
  color: ${palette.text.primary};
  font-weight: bold;
  font-style: bold;
  margin: auto;
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
      <Address>{address}</Address>
      <StyledNumber>{number + 1}</StyledNumber>
    </Box>
    <Info>
      <Rating>
        <StarRatings
          rating={reviewAvg}
          starRatedColor="#efa913"
          numberOfStars={5}
          starSpacing="1px"
          starDimension="1rem"
          name="rating"
        />{' '}
        <span>{reviewCount} reviews</span>
      </Rating>
      <h2>{name}</h2>
      <span>Start from </span>
      <big>{' $' + startFrom}</big>
      <span>/Night</span>
      <p>{description}</p>
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
          Square Feet: <PrimaryText>{squareFeet} sqft</PrimaryText>
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
      <ViewDetail href="/" variant="transparent">
        View Details &nbsp;&rsaquo;
      </ViewDetail>
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
