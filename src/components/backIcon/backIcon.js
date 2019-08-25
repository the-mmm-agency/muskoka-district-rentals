import React from 'react'
import { css } from '@xstyled/emotion'

const BackIcon = props => (
  <svg
    css={css`
      align-self: center;
      width: 30;
      height: 30;
    `}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
  </svg>
)

export default BackIcon
