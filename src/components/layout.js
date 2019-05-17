import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import GlobalStyle from 'theme/global.css'
import theme from 'theme'
import Header from 'components/header'
import Footer from 'components/footer'

const Root = styled.div`
  margin: 0 auto;
  max-width: 9609;
  padding-top: 0;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Root>
          <main>{children}</main>
          <Footer />
        </Root>
      </>
    </ThemeProvider>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
