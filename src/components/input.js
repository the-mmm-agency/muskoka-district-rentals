import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import palette from 'theme/palette'

const Wrapper = styled.div`
  position: relative;
  input {
    &:focus {
      & ~ span {
        transform-origin: bottom left;
        transform: scaleX(1);
      }
      outline: none;
    }
    background-color: transparent;
    border: 1px solid transparent;
    border-bottom-color: ${rgba(palette.text.primary, 0.18)};
    color: ${palette.text.primary};
  }
  span {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${palette.text.primary};
    width: 12rem;
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }
`

const Input = props => (
  <Wrapper>
    <input {...props} />
    <span />
  </Wrapper>
)

export default Input
