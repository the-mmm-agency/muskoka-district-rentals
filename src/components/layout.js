import React from 'react'
import PropTypes from 'prop-types'
import css from '@styled-system/css'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import globalStyles from 'theme/global.css'
import fonts from '../fonts'
import theme from 'theme'
import Header from 'components/header'
import Footer from 'components/footer'

const Root = styled.div`
  margin: 0 auto;
  max-width: 9609;
  padding-top: 0;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={fonts} />
    <Global styles={css(globalStyles)} />
    <>
      <Header />
      <Root>
        <main>{children}</main>
        <Footer />
      </Root>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
