import { createGlobalStyle } from 'styled-components'
import { darken, rgba } from 'polished'

import palette from 'theme/palette'
import transitions from 'theme/transitions'
import * as fonts from '../fonts'

export default createGlobalStyle`
    @font-face {
      font-weight: normal;
      font-family: 'Raleway';
      font-style: normal;
      src: local('Raleway'), local('Raleway-Regular'),
        url(${fonts.RalewayWoff2}) format('woff2'),
        url(${fonts.RalewayWoff}) format('woff');
      font-display: auto;
    }
    @font-face {
      font-weight: 500;
      font-family: 'Raleway';
      font-style: normal;
      src: local('Raleway Medium'), local('Raleway-Medium'),
        url(${fonts.RalewayMediumWoff2}) format('woff2'),
        url(${fonts.RalewayMediumWoff}) format('woff');
      font-display: auto;
    }
    @font-face {
      font-weight: 600;
      font-family: 'Raleway';
      font-style: normal;
      src: local('Raleway SemiBold'), local('Raleway-SemiBold'),
        url(${fonts.RalewaySemiBoldWoff2}) format('woff2'),
        url(${fonts.RalewaySemiBoldWoff}) format('woff');
      font-display: auto;
    }
    @font-face {
      font-weight: bold;
      font-family: 'Raleway';
      font-style: normal;
      src: local('Raleway Bold'), local('Raleway-Bold'),
        url(${fonts.RalewayBoldWoff2}) format('woff2'),
        url(${fonts.RalewayBoldWoff}) format('woff');
      font-display: auto;
    }
    @font-face {
      font-weight: normal;
      font-family: 'Didot';
      font-style: normal;
      src: local('Raleway Bold'), local('Raleway-Bold'),
        url(${fonts.DidotWoff2}) format('woff2'),
        url(${fonts.DidotWoff}) format('woff');
      font-display: auto;
  }
  @font-face {
      font-weight: bold;
      font-family: 'Didot';
      font-style: bold;
      src: local('Raleway Bold'), local('Raleway-Bold'),
        url(${fonts.DidotBoldWoff2}) format('woff2'),
        url(${fonts.DidotBoldWoff}) format('woff');
      font-display: auto;
  }
  ::selection {
    color: white;
    background-color: ${palette.primary};
  }
  * {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  a {
    &:hover {
      color: ${darken(0.2, palette.secondary)};
      text-decoration: underline;
    }
    padding: 0;
    color: ${palette.secondary};
    text-decoration: none;
    vertical-align: middle;
    border: 0;
    border-radius: 0;
    outline: none;
    cursor: pointer;
    transition: ${transitions.create(['color', 'text-decoration'])};
    appearance: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    -moz-focus-inner: {
      borderstyle: none;
    }
  }
  ol, ul {
    list-style: none;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-feature-settings: "lnum" 1, "kern" 1;
    font-kerning: normal;
    font-variant-numeric: lining-nums;
    background-color: ${palette.background.default};
  }
  button {
  &::-moz-focus-inner {
    border-style: 'none';
  }
  &:hover {
    @media (hover: none) {
      background-color: transparent;
    }
    text-decoration: none;
  }
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  appearance: none;
  outline: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  text-decoration: none;
  vertical-align: middle;
  user-select: none;
  }
  input, textarea {
    appearance: none;
    background: transparent;
    border: none;
    color: ${palette.text.primary};
    outline: none;
    resize: none;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${rgba(palette.text.primary, 0.6)}
    }
  }
`
