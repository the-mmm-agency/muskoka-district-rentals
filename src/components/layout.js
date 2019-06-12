import React from 'react'
import PropTypes from 'prop-types'
import { useMedia } from 'use-media'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import fonts from '../fonts'

import Footer from 'components/footer'
import MobileHeader from 'components/mobileHeader'
import Header from 'components/header'
import globalStyles from 'theme/global.css'
import theme from 'theme'

const headerLinks = [
  '/cottages',
  '/guest-services',
  '/about-us',
  '/rent-your-cottage',
  '/buy-or-sell',
  '/private-fleet',
]

const Layout = ({ children }) => {
  const isLarge = useMedia({ minWidth: 600 })
  return (
    <ThemeProvider theme={theme}>
      <Global styles={fonts} />
      <Global styles={globalStyles} />
      <>
        {isLarge ? (
          <Header links={headerLinks} />
        ) : (
          <MobileHeader links={headerLinks} />
        )}
        <div maxWidth={9609} m="0 auto" pt={0}>
          <main>{children}</main>
          <Footer />
        </div>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
