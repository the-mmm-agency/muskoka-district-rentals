import React from 'react'

const RightIcon = () => (
  <svg
    css={{
      width: 50,
      height: 50,
      alignSelf: 'center',
      fill: props => props.theme.colors.textPrimary,
    }}
    alignSelf="center"
    viewBox="0 0 32 32"
    aria-hidden="true"
  >
    <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" />
  </svg>
)

export default RightIcon
