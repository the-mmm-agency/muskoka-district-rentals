import React from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'

import palette from 'theme/palette'
import { rhythm } from 'utils/typography'

const Cottage = ({
  name,
  reviewAvg,
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
}) => (
  <div>
    <StarRatings
      rating={reviewAvg}
      starRatedColor="yellow"
      numberOfStars={5}
      name="rating"
    />{' '}
    {reviewCount} reviews
  </div>
)
