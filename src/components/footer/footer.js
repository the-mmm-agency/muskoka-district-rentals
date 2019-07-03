import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled, { css } from '@xstyled/emotion'

import FooterList from 'components/footerList'

const StyledFooter = styled.footer`
  background-color: footer;
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5% 25%;
`

const Logo = styled(Img)`
  width: 230px;
  height: 60px;
  margin: 2;
`

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
      <div
        css={css`
          display: flex;
          flex-basis: 25%;
          align-items: center;
          justify-content: center;
          min-width: 100%;
        `}
      >
        {links.siteMetadata.footerLinks.map(list => (
          <FooterList links={list} key={list[0]} />
        ))}
      </div>
      <div
        css={css`
          width: 100%;
          height: 1px;
          margin: 2 0;
          opacity: 0.2;
          background-color: white;
        `}
      />
      <Logo fixed={logo.childImageSharp.fixed} />
      <span
        css={css`
          align-self: center;
          margin-left: 1;
          opacity: 0.5;
        `}
      >
        © {new Date().getFullYear()} Muskoka District Rentals
      </span>
    </StyledFooter>
  )
}

export default Footer
