import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'

import palette from 'theme/palette'
import Header from 'components/header'
import Footer from 'components/footer'

const Root = styled.div`
  margin: 0 auto;
  max-width: 9609;
  padding-top: 0;
`

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Raleway';
      src: url('../../fonts/Raleway/Raleway.eot');
      src: local('Raleway'), local('Raleway-Regular'),
        url('../../fonts/Raleway/Raleway.eot?#iefix') format('embedded-opentype'),
        url('../../fonts/Raleway/Raleway.woff2') format('woff2'),
        url('../../fonts/Raleway/Raleway.woff') format('woff'),
        url('../../fonts/Raleway/Raleway.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Raleway';
      src: url('../../fonts/Raleway/Raleway Medium.eot');
      src: local('Raleway Medium'), local('Raleway-Medium'),
        url('../../fonts/Raleway/Raleway Medium.eot?#iefix') format('embedded-opentype'),
        url('../../fonts/Raleway/Raleway Medium.woff2') format('woff2'),
        url('../../fonts/Raleway/Raleway Medium.woff') format('woff'),
        url('../../fonts/Raleway/Raleway Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Raleway';
      src: url('../../fonts/Raleway/Raleway SemiBold.eot');
      src: local('Raleway SemiBold'), local('Raleway-SemiBold'),
        url('../../fonts/Raleway/Raleway SemiBold.eot?#iefix') format('embedded-opentype'),
        url('../../fonts/Raleway/Raleway SemiBold.woff2') format('woff2'),
        url('../../fonts/Raleway/Raleway SemiBold.woff') format('woff'),
        url('../../fonts/Raleway/Raleway SemiBold.ttf') format('truetype');
      font-weight: 600;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Raleway';
      src: url('../../fonts/Raleway/Raleway Bold.eot');
      src: local('Raleway Bold'), local('Raleway-Bold'),
        url('../../fonts/Raleway/Raleway Bold.eot?#iefix') format('embedded-opentype'),
        url('../../fonts/Raleway/Raleway Bold.woff2') format('woff2'),
        url('../../fonts/Raleway/Raleway Bold.woff') format('woff'),
        url('../../fonts/Raleway/Raleway Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Didot';
      src: url('../../fonts/Didot/Didot.eot');
      src: local('Didot'),
          url('../../fonts/Didot/Didot.eot?#iefix') format('embedded-opentype'),
          url('../../fonts/Didot/Didot.woff2') format('woff2'),
          url('../../fonts/Didot/Didot.woff') format('woff'),
          url('../../fonts/Didot/Didot.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }
  @font-face {
      font-family: 'Didot';
      src: url('../../fonts/Didot/Didot Bold.eot');
      src: local('Didot Bold'),
          url('../../fonts/Didot/Didot Bold.eot?#iefix') format('embedded-opentype'),
          url('../../fonts/Didot/Didot Bold.woff2') format('woff2'),
          url('../../fonts/Didot/Didot Bold.woff') format('woff'),
          url('../../fonts/Didot/Didot Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: bold;
      font-display: swap;
  }
  html {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: subpixel-antialiased;
  }
  *, *::before, *::after {
    box-sizing: inherit
  }
  body {
    margin: 0;
    color: ${palette.text.primary};
    background-color: ${palette.background.default}
  }
  a {
    background-color: transparent;
    color: ${palette.primary}
  }
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <Root>
      <main>{children}</main>
      <Footer />
    </Root>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
