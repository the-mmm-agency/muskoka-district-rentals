import React from 'react'
import PropTypes from 'prop-types'
import { useMedia } from 'use-media'
import { graphql, useStaticQuery } from 'gatsby'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import Footer from 'components/footer'
import MobileHeader from 'components/mobileHeader'
import Header from 'components/header'
import globalStyles from 'theme/global.css'
import fonts from 'theme/fonts.css'
import theme from 'theme'

const Layout = ({ children }) => {
  const isLarge = useMedia({ minWidth: theme.breakpoints[2] })
  const {
    site: {
      siteMetadata: { headerLinks },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          headerLinks
        }
      }
    }
  `)
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
        <div maxWidth="100vw" m="0 auto" pt={0}>
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
