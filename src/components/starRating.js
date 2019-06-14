import React from 'react'
import { withTheme } from 'emotion-theming'
import StarRatings from 'react-star-ratings'

const StarRating = ({ theme, ...props }) => (
  <StarRatings
    {...props}
    starRatedColor={theme.colors.starRated}
    numberOfStars={5}
    starSpacing="1px"
    name="rating"
  />
)

export default withTheme(StarRating)
