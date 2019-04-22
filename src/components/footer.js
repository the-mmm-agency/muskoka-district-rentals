import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import Link from 'components/link'
import { rhythm } from 'utils/typography'

const List = styled.ul`
  list-style: none;
`

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

const Wrapper = styled.div`
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

const StyledLink = styled(Link)`
  &:hover {
    opacity: 1;
  }
  color: #fff;
  opacity: 0.8;
  transition: opacity ease 0.3s;
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
    <footer>
      <Wrapper>
        <LinkWrapper>
          <List>
            <li>
              <StyledLink to="/site-map">Site Map</StyledLink>
            </li>
            <li>
              <StyledLink to="/terms-and-conditions">
                Terms & Conditions
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/privacy-policy">Privacy Policy</StyledLink>
            </li>
            <li>
              <StyledLink to="/help">Help</StyledLink>
            </li>
          </List>
          <List>
            <li>
              <StyledLink to="/our-rentals">Our Rentals</StyledLink>
            </li>
            <li>
              <StyledLink to="/guest-concierge">Guest Concierge</StyledLink>
            </li>
            <li>
              <StyledLink to="/about">About</StyledLink>
            </li>
            <li>
              <StyledLink to="/contact">Contact</StyledLink>
            </li>
          </List>
          <List>
            <li>
              <StyledLink to="/faqs">FAQs</StyledLink>
            </li>
            <li>
              <StyledLink to="/blog">Blog</StyledLink>
            </li>
            <li>
              <StyledLink to="/our-blog">Our Blog</StyledLink>
            </li>
            <li>
              <StyledLink to="/press">Press</StyledLink>
            </li>
          </List>
        </LinkWrapper>
        <Divider />
        <Img fixed={data.file.childImageSharp.fixed} />
        <Copyright>
          © {new Date().getFullYear()} Muskoka District Rentals
        </Copyright>
      </Wrapper>
    </footer>
  )
}

export default Footer
