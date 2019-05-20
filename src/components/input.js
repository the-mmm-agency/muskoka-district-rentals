import React from 'react'
import styled from '@emotion/styled'
import { rgba } from 'polished'
import { themeGet, space } from 'styled-system'

const Wrapper = styled.div`
  position: relative;
  input {
    &:focus {
      & ~ span {
        transform-origin: bottom left;
        transform: scaleX(1);
      }
    }
    border: 1px solid transparent;
    border-bottom-color: ${props =>
      rgba(props.theme.colors.text.primary, 0.18)};
  }
  span {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${themeGet('color.text.primary')};
    width: 12rem;
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }
  ${space}
`

const Input = props => (
  <Wrapper {...props}>
    <input {...props} />
    <span />
  </Wrapper>
)

export default Input
