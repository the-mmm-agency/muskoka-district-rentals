import React from 'react'
import { withTheme } from 'emotion-theming'
import styled from '@emotion/styled'
import { system } from '@xstyled/system'
import StarRatings from 'react-star-ratings'

const SystemStarRating = styled(StarRatings)(system)

const StarRating = ({ theme, ...props }) => (
  <SystemStarRating
    {...props}
    starRatedColor={theme.colors.starRated}
    numberOfStars={5}
    starSpacing="1px"
    name="rating"
  />
)

export default withTheme(StarRating)
