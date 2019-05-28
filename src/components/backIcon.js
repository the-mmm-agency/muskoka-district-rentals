import React from 'react'
import styled from '@emotion/styled'
import { themeGet } from 'styled-system'

const Icon = styled.svg`
  align-self: center;
  width: 30px;
  height: 30px;
  fill: ${themeGet('colors.text.primary')};
`

const BackIcon = props => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
  </Icon>
)

export default BackIcon
