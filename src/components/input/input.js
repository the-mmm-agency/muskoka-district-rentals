import React from 'react'
import styled from '@emotion/styled'
import { system, th } from '@xstyled/system'
import { transparentize } from 'polished'

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
    border-bottom-color: ${props =>
      transparentize(0.82, th.color('textPrimary')(props))};
    width: 100%;
  }
  span {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    width: 12rem;
    height: 1px;
    background-color: ${th.color('textPrimary')};
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
