import { createGlobalStyle } from 'styled-components'

import palette from 'theme/palette'
import * as fonts from '../fonts'

export default createGlobalStyle`
    @font-face {
      font-family: 'Raleway';
      src: url(${fonts.RalewayEot});
      src: local('Raleway'), local('Raleway-Regular'),
        url(${fonts.RalewayEot}?#iefix) format('embedded-opentype'),
        url(${fonts.RalewayWoff2}) format('woff2'),
        url(${fonts.RalewayWoff}) format('woff'),
        url(${fonts.RalewayTTF}) format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Raleway';
      src: url(${fonts.RalewayMediumEot});
      src: local('Raleway Medium'), local('Raleway-Medium'),
        url(${fonts.RalewayMediumEot}?#iefix) format('embedded-opentype'),
        url(${fonts.RalewayMediumWoff2}) format('woff2'),
        url(${fonts.RalewayMediumWoff}) format('woff'),
        url(${fonts.RalewayMediumTTF}) format('truetype');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Raleway';
      src: url(${fonts.RalewaySemiBoldEot});
      src: local('Raleway SemiBold'), local('Raleway-SemiBold'),
        url(${fonts.RalewaySemiBoldEot}?#iefix) format('embedded-opentype'),
        url(${fonts.RalewaySemiBoldWoff2}) format('woff2'),
        url(${fonts.RalewaySemiBoldWoff}) format('woff'),
        url(${fonts.RalewaySemiBoldTTF}) format('truetype');
      font-weight: 600;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Raleway';
      src: url(${fonts.RalewayBoldEot});
      src: local('Raleway Bold'), local('Raleway-Bold'),
        url(${fonts.RalewayBoldEot}?#iefix) format('embedded-opentype'),
        url(${fonts.RalewayBoldWoff2}) format('woff2'),
        url(${fonts.RalewayBoldWoff}) format('woff'),
        url(${fonts.RalewayBoldTTF}) format('truetype');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Didot';
      src: url(${fonts.DidotEot});
      src: local('Raleway Bold'), local('Raleway-Bold'),
        url(${fonts.DidotEot}?#iefix) format('embedded-opentype'),
        url(${fonts.DidotWoff2}) format('woff2'),
        url(${fonts.DidotWoff}) format('woff'),
        url(${fonts.DidotTTF}) format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }
  @font-face {
      font-family: 'Didot';
      src: url(${fonts.DidotBoldEot});
      src: local('Raleway Bold'), local('Raleway-Bold'),
        url(${fonts.DidotBoldEot}?#iefix) format('embedded-opentype'),
        url(${fonts.DidotBoldWoff2}) format('woff2'),
        url(${fonts.DidotBoldWoff}) format('woff'),
        url(${fonts.DidotBoldTTF}) format('truetype');
      font-weight: bold;
      font-style: bold;
      font-display: swap;
  }
  &::select {
    background-color: ${palette.primary};
    color: white;
  }
  * {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: subpixel-antialiased;
  }
  ol, ul {
    list-style: none;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  h1,h2,h3,h4,h5,h6 {
    text-rendering: optimizeLegibility;
    font-variant-numeric: tabular-nums;
    font-feature-settings: "tnum";
  }
  body {
    margin: 0;
    color: ${palette.text.primary};
    background-color: ${palette.background.default};
  }
  a {
    background-color: transparent;
    color: ${palette.primary};
  }
`
