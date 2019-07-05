import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Box from 'components/box'
import BottomBar from 'components/bottomBar'
import Footer from 'components/footer'
import Hidden from 'components/hidden'
import MobileHeader from 'components/mobileHeader'
import Header from 'components/header'

const Layout = ({ children, ...props }) => {
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
    <>
      <Hidden up="md">
        <MobileHeader links={headerLinks} />
      </Hidden>
      <Hidden down="md">
        <Header links={headerLinks} />
      </Hidden>
      <Box maxWidth="100vw" overflowX="hidden" m="0 auto" pt={0} {...props}>
        <main>{children}</main>
        <Hidden up="md">
          <BottomBar />
        </Hidden>
        <Footer />
      </Box>
    </>
  )
}

export default Layout
