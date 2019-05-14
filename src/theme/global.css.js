import { createGlobalStyle } from 'styled-components'

import palette from 'theme/palette'
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
`
