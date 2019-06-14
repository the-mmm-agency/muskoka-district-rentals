import React from 'react'
import { useMedia } from 'use-media'
import { graphql, useStaticQuery } from 'gatsby'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import globalStyles from 'styles/global.css'
import Footer from 'components/footer'
import MobileHeader from 'components/mobileHeader'
import Header from 'components/header'
import normalize from 'styles/normalize.css'
import fonts from 'styles/fonts.css'
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
      <Global styles={normalize} />
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

export default Layout
