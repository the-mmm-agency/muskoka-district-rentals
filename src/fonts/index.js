import { css } from '@emotion/core'

import DidotBoldWoff from './Didot/Didot-Bold.woff'
import DidotBoldWoff2 from './Didot/Didot-Bold.woff2'
import DidotBoldTTF from './Didot/Didot-Bold.ttf'
import DidotWoff from './Didot/Didot.woff'
import DidotWoff2 from './Didot/Didot.woff2'
import DidotTTF from './Didot/Didot.ttf'
import RalewayBoldWoff from './Raleway/Raleway-Bold.woff'
import RalewayBoldWoff2 from './Raleway/Raleway-Bold.woff2'
import RalewayMediumWoff from './Raleway/Raleway-Medium.woff'
import RalewayMediumWoff2 from './Raleway/Raleway-Medium.woff2'
import RalewaySemiBoldWoff from './Raleway/Raleway-SemiBold.woff'
import RalewaySemiBoldWoff2 from './Raleway/Raleway-SemiBold.woff2'
import RalewayWoff from './Raleway/Raleway.woff'
import RalewayWoff2 from './Raleway/Raleway.woff2'

export {
  DidotBoldWoff,
  DidotBoldWoff2,
  DidotWoff,
  DidotWoff2,
  RalewayBoldWoff,
  RalewayBoldWoff2,
  RalewayMediumWoff,
  RalewayMediumWoff2,
  RalewaySemiBoldWoff,
  RalewaySemiBoldWoff2,
  RalewayWoff,
  RalewayWoff2,
}

const fonts = css`
  @font-face {
    font-weight: normal;
    font-family: 'Raleway';
    font-style: normal;
    src: local('Raleway'), local('Raleway-Regular'),
      url(${RalewayWoff2}) format('woff2'), url(${RalewayWoff}) format('woff');
    font-display: auto;
  }
  @font-face {
    font-weight: 500;
    font-family: 'Raleway';
    font-style: normal;
    src: local('Raleway Medium'), local('Raleway-Medium'),
      url(${RalewayMediumWoff2}) format('woff2'),
      url(${RalewayMediumWoff}) format('woff');
    font-display: auto;
  }
  @font-face {
    font-weight: 600;
    font-family: 'Raleway';
    font-style: normal;
    src: local('Raleway SemiBold'), local('Raleway-SemiBold'),
      url(${RalewaySemiBoldWoff2}) format('woff2'),
      url(${RalewaySemiBoldWoff}) format('woff');
    font-display: auto;
  }
  @font-face {
    font-weight: bold;
    font-family: 'Raleway';
    font-style: normal;
    src: local('Raleway Bold'), local('Raleway-Bold'),
      url(${RalewayBoldWoff2}) format('woff2'),
      url(${RalewayBoldWoff}) format('woff');
    font-display: auto;
  }
  @font-face {
    font-weight: normal;
    font-family: 'Didot';
    font-style: normal;
    src: local('Raleway Bold'), local('Raleway-Bold'),
      url(${DidotWoff2}) format('woff2'), url(${DidotWoff}) format('woff'),
      url(${DidotTTF}) format('ttf');
    font-display: auto;
  }
  @font-face {
    font-weight: bold;
    font-family: 'Didot';
    font-style: bold;
    src: local('Raleway Bold'), local('Raleway-Bold'),
      url(${DidotBoldWoff2}) format('woff2'),
      url(${DidotBoldWoff}) format('woff'), url(${DidotBoldTTF}) format('ttf');
    font-display: auto;
  }
`

export default fonts
