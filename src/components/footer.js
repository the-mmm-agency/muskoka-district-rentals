import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import FooterList from 'components/footerList'
import { rhythm } from 'theme/typography'

const Copyright = styled.span`
  align-self: center;
  margin-left: ${rhythm(1 / 2)};
  opacity: 0.5;
`
const Divider = styled.div`
  margin: ${rhythm(2)} none;
  background-color: #fff;
  opacity: 0.2;
  height: 1px;
  width: 100%;
`

const Wrapper = styled.footer`
  background-color: #212020;
  color: #fff;
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
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-white.png" }) {
        childImageSharp {
          fixed(width: 100, height: 50) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  const links = [
    ['/site-map', '/terms-and-conditions', '/privacy-policy', '/help'],
    ['/our-rentals', '/guest-concierge', '/about', '/contact'],
    ['/faqs', '/blog', '/our-blog', '/press'],
  ]

  return (
    <Wrapper>
      <LinkWrapper>
        {links.map(list => (
          <FooterList links={list} key={list[0]} />
        ))}
      </LinkWrapper>
      <Divider />
      <Img fixed={data.file.childImageSharp.fixed} />
      <Copyright>
        © {new Date().getFullYear()} Muskoka District Rentals
      </Copyright>
    </Wrapper>
  )
}

export default Footer
