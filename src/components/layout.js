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
