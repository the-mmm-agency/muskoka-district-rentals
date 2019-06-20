import React from 'react'
import { useMedia } from 'use-media'
import { ThemeProvider } from 'emotion-theming'
import { graphql, useStaticQuery } from 'gatsby'

import theme from 'theme'
import GlobalStyles from 'components/globalStyles'
import Box from 'components/box'
import Footer from 'components/footer'
import MobileHeader from 'components/mobileHeader'
import Header from 'components/header'

const Layout = ({ children }) => {
  const isLarge = useMedia({ minWidth: theme.breakpoints.md })
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
      <GlobalStyles />
      <>
        {isLarge ? (
          <Header links={headerLinks} />
        ) : (
          <MobileHeader links={headerLinks} />
        )}
        <Box maxWidth="100vw" m="0 auto" pt={0}>
          <main>{children}</main>
          <Footer />
        </Box>
      </>
    </ThemeProvider>
  )
}

export default Layout
