import { createGlobalStyle } from 'styled-components'

import palette from 'theme/palette'
import * as fonts from '../fonts'

export default createGlobalStyle`
    @font-face {
      font-weight: normal;
      font-family: 'Raleway';
      font-style: normal;
      src: url(${fonts.RalewayEot});
      src: local('Raleway'), local('Raleway-Regular'),
        url(${fonts.RalewayEot}?#iefix) format('embedded-opentype'),
        url(${fonts.RalewayWoff2}) format('woff2'),
        url(${fonts.RalewayWoff}) format('woff'),
        url(${fonts.RalewayTTF}) format('truetype');
      font-display: swap;
    }
    @font-face {
      font-weight: 500;
      font-family: 'Raleway';
      font-style: normal;
      src: url(${fonts.RalewayMediumEot});
      src: local('Raleway Medium'), local('Raleway-Medium'),
        url(${fonts.RalewayMediumEot}?#iefix) format('embedded-opentype'),
        url(${fonts.RalewayMediumWoff2}) format('woff2'),
        url(${fonts.RalewayMediumWoff}) format('woff'),
        url(${fonts.RalewayMediumTTF}) format('truetype');
      font-display: block;
    }
    @font-face {
      font-weight: 600;
      font-family: 'Raleway';
      font-style: normal;
      src: url(${fonts.RalewaySemiBoldEot});
      src: local('Raleway SemiBold'), local('Raleway-SemiBold'),
        url(${fonts.RalewaySemiBoldEot}?#iefix) format('embedded-opentype'),
        url(${fonts.RalewaySemiBoldWoff2}) format('woff2'),
        url(${fonts.RalewaySemiBoldWoff}) format('woff'),
        url(${fonts.RalewaySemiBoldTTF}) format('truetype');
      font-display: block;
    }
    @font-face {
      font-weight: bold;
      font-family: 'Raleway';
      font-style: normal;
      src: url(${fonts.RalewayBoldEot});
      src: local('Raleway Bold'), local('Raleway-Bold'),
        url(${fonts.RalewayBoldEot}?#iefix) format('embedded-opentype'),
        url(${fonts.RalewayBoldWoff2}) format('woff2'),
        url(${fonts.RalewayBoldWoff}) format('woff'),
        url(${fonts.RalewayBoldTTF}) format('truetype');
      font-display: block;
    }
    @font-face {
      font-weight: normal;
      font-family: 'Didot';
      font-style: normal;
      src: url(${fonts.DidotEot});
      src: local('Raleway Bold'), local('Raleway-Bold'),
        url(${fonts.DidotEot}?#iefix) format('embedded-opentype'),
        url(${fonts.DidotWoff2}) format('woff2'),
        url(${fonts.DidotWoff}) format('woff'),
        url(${fonts.DidotTTF}) format('truetype');
      font-display: swap;
  }
  @font-face {
      font-weight: bold;
      font-family: 'Didot';
      font-style: bold;
      src: url(${fonts.DidotBoldEot});
      src: local('Raleway Bold'), local('Raleway-Bold'),
        url(${fonts.DidotBoldEot}?#iefix) format('embedded-opentype'),
        url(${fonts.DidotBoldWoff2}) format('woff2'),
        url(${fonts.DidotBoldWoff}) format('woff'),
        url(${fonts.DidotBoldTTF}) format('truetype');
      font-display: block;
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
