import React from 'react'
import styled from 'styled-components'

import palette from 'theme/palette'
import { rhythm } from 'theme/typography'

const Icon = styled.svg`
  align-self: center;
  margin-left: ${rhythm(1)};
  fill: ${palette.text.primary};
  height: 50px;
  width: 50px;
`
const RightIcon = () => (
  <Icon viewBox="0 0 32 32" class="icon icon-chevron-right" aria-hidden="true">
    <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" />
  </Icon>
)

export default RightIcon
