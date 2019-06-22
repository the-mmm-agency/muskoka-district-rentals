import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { graphql, useStaticQuery } from 'gatsby'

import theme from 'theme'
import GlobalStyles from 'components/globalStyles'
import Box from 'components/box'
import Footer from 'components/footer'
import Hidden from 'components/hidden'
import MobileHeader from 'components/mobileHeader'
import Header from 'components/header'

const Layout = ({ children }) => {
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
      <>
        <GlobalStyles />
        <Hidden up="md">
          <MobileHeader links={headerLinks} />
        </Hidden>
        <Hidden down="md">
          <Header links={headerLinks} />
        </Hidden>
        <Box maxWidth="100vw" m="0 auto" pt={0}>
          <main>{children}</main>
          <Footer />
        </Box>
      </>
    </ThemeProvider>
  )
}

export default Layout
