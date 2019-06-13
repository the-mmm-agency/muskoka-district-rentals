import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import { rhythm } from 'theme/typography'
import FooterList from 'components/footerList'

const Copyright = styled.span`
  align-self: center;
  margin-left: ${rhythm(1 / 2)};
  opacity: 0.5;
`
const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: ${rhythm(2)} none;
  opacity: 0.2;
`

const Wrapper = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5% 25%;
`

const LinkWrapper = styled.div`
  display: flex;
  flex-basis: 25%;
  align-items: center;
  justify-content: center;
  min-width: 100%;
`

const Footer = () => {
  const { logo, links } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-white.png" }) {
        childImageSharp {
          fixed(width: 100, height: 50) {
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

  console.log(logo)

  return (
    <Wrapper bg="footer" fg="white">
      <LinkWrapper>
        {links.siteMetadata.footerLinks.map(list => (
          <FooterList links={list} key={list[0]} />
        ))}
      </LinkWrapper>
      <Divider bg="white" />
      <Img fixed={logo.childImageSharp.fixed} />
      <Copyright>
        © {new Date().getFullYear()} Muskoka District Rentals
      </Copyright>
    </Wrapper>
  )
}

export default Footer
