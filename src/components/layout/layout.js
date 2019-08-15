import React from 'react'
import { css } from '@xstyled/emotion'
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
      <Hidden down="md">
        <Header links={headerLinks} />
      </Hidden>
      <Hidden up="md">
        <MobileHeader links={headerLinks} />
      </Hidden>
      <Box
        css={css`
          max-width: 100vw;
          overflow-x: hidden;
          margin: 0 auto;
          padding-top: 0;
        `}
        {...props}
      >
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
