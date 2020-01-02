import styled, { css } from '@xstyled/emotion';

const layerWidth = 20;
const layerHeight = 3;
const layerSpacing = 3;

export const Button = styled.button`
  padding: 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  position: relative;
  width: 50px;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  margin-left: auto;
`;

const activeStyle = props =>
  props.active &&
  css`
    background-color: transparent !important;
    transition-delay: 0s;
    transition-timing-function: ease-out;
    &::before,
    &::after {
      width: ${layerWidth}px;
    }
    &::before {
      top: ${layerWidth * -2}px;
      left: ${layerWidth * -2}px;
      transform: translate3d(${layerWidth * 2}px, ${layerWidth * 2}px, 0)
        rotate(45deg);
      transition: left 0.125s ease-out, top 0.05s 0.125s linear,
        transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    &::after {
      top: ${layerWidth * -2}px;
      right: ${layerWidth * -2}px;
      transform: translate3d(${layerWidth * -2}px, ${layerWidth * 2}px, 0)
        rotate(-45deg);
      transition: right 0.125s ease-out, top 0.05s 0.125s linear,
        transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  `;

export const Inner = styled.span`
  display: block;
  top: 50%;
  margin-top: ${layerHeight / -2}px;
  width: ${layerWidth}px;
  transition: background-color 0.125s 0.175s ease-in;
  &,
  &::before,
  &::after {
    background-color: textPrimary;
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
  ${activeStyle}
`;
