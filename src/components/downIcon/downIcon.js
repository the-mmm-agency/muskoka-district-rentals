import React from 'react'
import { css } from '@xstyled/emotion'

const DownIcon = () => (
  <svg
    css={css`
      align-self: center;
      width: 2rem;
      height: 2rem;
      flex-shrink: 0;
      margin-left: 1;
      margin-top: auto;
      margin-bottom: 0;
    `}
    viewBox="0 0 32 32"
    aria-hidden="true"
  >
    <path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z" />
  </svg>
)

export default DownIcon
