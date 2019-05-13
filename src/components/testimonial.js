import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'

import palette from 'theme/palette'
import { rhythm, scale, options as typography } from 'theme/typography'

const Wrapper = styled.div`
  background-color: ${palette.background.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 8% 4%;
  margin: 10% auto;
  width: 75vw;
  text-align: center;
  h2 {
    ${scale(1)}
    margin-bottom: ${rhythm(4)};
  }
`

const Body = styled.p`
  ${scale(1 / 2)};
  line-height: 1.4;
  color: ${palette.text.primary};
  margin-bottom: ${rhythm(7 / 4)};
  font-style: italic;
  font-weight: 400;
  font-family: ${typography.headerFontFamily.join(',')};
`

const Title = styled.span`
  ${scale(1 / 6)};
  letter-spacing: 0.5em;
  font-weight: bold;
  font-style: bold;
  margin-bottom: ${rhythm(3 / 2)};
  text-transform: uppercase;
`

const Author = styled.span`
  ${scale(1 / 4)}
  margin-top: ${rhythm(4)};
  margin-bottom: ${rhythm(1 / 2)};
  strong {
    color: ${palette.text.primary};
  }
`

const Testimonial = ({ body, rating, author, property }) => (
  <Wrapper>
    <Title>Testimonial</Title>
    <h2>What Guests Say</h2>
    <Body>&quot;{body}&quot;</Body>
    <StarRatings
      rating={rating}
      starRatedColor={palette.starRated}
      numberOfStars={5}
      starSpacing="1px"
      starDimension="2rem"
      name="rating"
    />
    <Author>
      <strong>{author} -</strong> Review for {property.name} from{' '}
      <strong>{property.location}</strong>
    </Author>
  </Wrapper>
)

Testimonial.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  property: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  rating: PropTypes.number.isRequired,
}

export default Testimonial
