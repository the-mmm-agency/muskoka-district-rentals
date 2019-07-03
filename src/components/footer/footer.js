import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import FooterList from './footerList'
import { Copyright, Logo, StyledFooter, Hr } from './footer.css'

import Flex from 'components/flex'

const Footer = () => {
  const { logo, links } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-white.png" }) {
        childImageSharp {
          fixed(width: 230, height: 60) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      links: site {
        siteMetadata {
          footerLinks
        }
      }
    }
  `)

  return (
    <StyledFooter>
      <Flex
        col={1 / 4}
        alignItems="center"
        justifyContent="center"
        minWidth="100%"
      >
        {links.siteMetadata.footerLinks.map(list => (
          <FooterList links={list} key={list[0]} />
        ))}
      </Flex>
      <Hr />
      <Logo fixed={logo.childImageSharp.fixed} />
      <Copyright>
        © {new Date().getFullYear()} Muskoka District Rentals
      </Copyright>
    </StyledFooter>
  )
}

export default Footer
