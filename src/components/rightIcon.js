import React from 'react'
import styled from '@emotion/styled'

import palette from 'theme/palette'

const Icon = styled.svg`
  align-self: center;
  width: 50px;
  height: 50px;
  fill: ${palette.text.primary};
`
const RightIcon = () => (
  <Icon viewBox="0 0 32 32" class="icon icon-chevron-right" aria-hidden="true">
    <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" />
  </Icon>
)

export default RightIcon
