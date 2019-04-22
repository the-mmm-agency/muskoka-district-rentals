import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import Link from 'components/link'

const StyledLink = styled(Link)`
  color: inherit;
  font-family: 'Playfair Display';
  font-weight: 500;
  margin: auto;
  text-transform: uppercase;
`

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 16px;
  position: sticky;
  text-align: center;
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 200, height: 104) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <Link to="/">
        <Img fixed={data.file.childImageSharp.fixed} />
      </Link>
      <StyledLink to="/cottages">
        <span>Cottages</span>
      </StyledLink>
      <StyledLink to="/guest-services">
        <span>Guest Services</span>
      </StyledLink>
      <StyledLink to="/rent-your-cottage">
        <span>Rent your cottage</span>
      </StyledLink>
      <StyledLink to="/buy-or-sell">
        <span>Buy or sell cottages</span>
      </StyledLink>
      <StyledLink to="/private-fleet">
        <span>Private Fleet</span>
      </StyledLink>
    </StyledHeader>
  )
}

export default Header
