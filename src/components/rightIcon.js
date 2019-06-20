import React from 'react'
import css from '@xstyled/emotion'

const RightIcon = () => (
  <svg
    css={css`
      width: 50;
      height: 50;
      align-self: center;
      fill: textPrimary;
    `}
    alignSelf="center"
    viewBox="0 0 32 32"
    aria-hidden="true"
  >
    <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" />
  </svg>
)

export default RightIcon
