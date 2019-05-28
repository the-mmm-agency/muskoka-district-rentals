import React from 'react'
import styled from '@emotion/styled'
import { rgba } from 'polished'
import { space, themeGet } from 'styled-system'

const Wrapper = styled.div`
  position: relative;
  input {
    &:focus {
      & ~ span {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
    border: 1px solid transparent;
    border-bottom-color: ${props =>
      rgba(props.theme.colors.text.primary, 0.18)};
  }
  span {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    width: 12rem;
    height: 1px;
    background-color: ${themeGet('color.text.primary')};
    transform: scaleX(0);
    transform-origin: bottom right;
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
