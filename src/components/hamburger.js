import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { themeGet } from 'styled-system'
import { css } from '@emotion/core'
import { ifProp } from 'styled-tools'

const layerWidth = 30
const layerHeight = 4
const layerSpacing = 6

const Wrapper = styled.button`
  padding: 15px;
  display: inline-block;
  cursor: pointer;

  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;

  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: hidden;
  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: ${layerHeight / -2}px;
    width: ${layerWidth}px;
    transition: background-color 0.125s 0.175s ease-in;
    &,
    &::before,
    &::after {
      background-color: ${themeGet('colors.text.primary')};
      height: ${layerHeight}px;
      border-radius: 20px;
      position: absolute;
      transition-property: transform;
      transition-duration: 0.15s;
      transition-timing-function: ease;
      content: '""';
    }
    &::before,
    &::after {
      content: '';
      display: block;
    }

    &::before {
      left: 0;
      top: calc((${layerHeight}px + ${layerSpacing}px) * -1);
      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
        top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;
      width: ${layerWidth / 2}px;
    }

    &::after {
      top: calc(${layerHeight}px + ${layerSpacing}px);
      right: 0;
      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
        top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;
      width: ${layerWidth / 2}px;
    }
  }
  ${ifProp(
    'active',
    css`
    .hamburger-inner {
        transition-delay: 0s;
        transition-timing-function: ease-out;
        background-color: transparent !important;
        &::before, &::after {
          width: ${layerWidth}px;
        };
        &::before {
          left: ${layerWidth * -2}px;
          top: ${layerWidth * -2}px;
          transform: translate3d(${layerWidth * 2}px,${layerWidth *
      2}px, 0) rotate(45deg);
          transition: left 0.125s ease-out,
                      top 0.05s 0.125s linear,
                      transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        &::after {
          right: ${layerWidth * -2}px;
          top: ${layerWidth * -2}px;
          transform: translate3d(${layerWidth * -2}px, ${layerWidth *
      2}px, 0) rotate(-45deg);
          transition: right 0.125s ease-out,
                      top 0.05s 0.125s linear,
                      transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
  `
  )}
`

const Hamburger = props => (
  <Wrapper {...props} type="button" ariaLabel="Menu" ariaControls="navigation">
    <span className="hamburger-box">
      <span className="hamburger-inner" />
    </span>
  </Wrapper>
)

Hamburger.defaultProps = {
  active: false,
}

Hamburger.propTypes = {
  active: PropTypes.bool,
}

export default Hamburger
