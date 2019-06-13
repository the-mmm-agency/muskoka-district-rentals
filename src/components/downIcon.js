import React from 'react'
import css from '@styled-system/css'

const DownIcon = () => (
  <svg
    css={css({
      alignSelf: 'center',
      width: 30,
      height: 30,
      ml: 1,
      fill: 'text.primary',
    })}
    viewBox="0 0 32 32"
    aria-hidden="true"
  >
    <path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z" />
  </svg>
)

export default DownIcon
