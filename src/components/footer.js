import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import { rhythm } from 'theme/typography'
import FooterList from 'components/footerList'
import links from 'constants/footerLinks'

const Copyright = styled.span`
  align-self: center;
  margin-left: ${rhythm(1 / 2)};
  opacity: 0.5;
`
const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: ${rhythm(2)} none;
  background-color: #fff;
  opacity: 0.2;
`

const Wrapper = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5% 25%;
  color: #fff;
  background-color: #212020;
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
