import React from 'react'
import styled from '@emotion/styled'

import palette from 'theme/palette'
import { rhythm } from 'theme/typography'

const Icon = styled.svg`
  align-self: center;
  margin-left: ${rhythm(1)};
  fill: ${palette.text.primary};
  height: 30px;
  width: 30px;
`

const DownIcon = () => (
  <Icon viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z" />
  </Icon>
)

export default DownIcon
