import React from 'react'
import styled, { css } from '@xstyled/emotion'
import { rgba } from 'polished'
import { th } from '@xstyled/system'

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
    ${props => css`
      border-bottom-color: ${rgba(th.color('textPrimary')(props), 0.18)};
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
    transition: transform 0.5s ease;
    width: 100%;
  }
`

const Input = props => (
  <Wrapper {...props}>
    <input {...props} />
    <span />
  </Wrapper>
)

export default Input
