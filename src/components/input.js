import React from 'react'
import styled from '@xstyled/emotion'
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
    border: 1px solid transparent;
    border-bottom-color: ${color('textPrimary')(color =>
      transparentize(0.18, color)
    )};
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
`

const Input = props => (
  <Wrapper {...props}>
    <input {...props} />
    <span />
  </Wrapper>
)

export default Input
