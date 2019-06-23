import React from 'react'
import styled, { css } from '@xstyled/emotion'
import { system } from '@xstyled/system'
import { transparentize } from 'polished'

import { color } from 'theme/ax'
import { transition } from 'theme/transitions'

const Wrapper = styled.div`
  display: inline-flex;
  flex-grow: 1;
  position: relative;
  input {
    &:focus {
      & ~ span {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
    border-bottom: 1px solid;
    ${props => css`
      border-bottom-color: ${transparentize(0.82, color('textPrimary')(props))};
    `}
    width: 100%;
  }
  span {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    width: 12rem;
    height: 1px;
    background-color: textPrimary;
    transform: scaleX(0);
    transform-origin: bottom right;
    width: 100%;
    ${transition('transform')};
  }
  ${system}
`

const Input = props => (
  <Wrapper {...props}>
    <input {...props} />
    <span />
  </Wrapper>
)

export default Input
