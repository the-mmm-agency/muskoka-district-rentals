import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import Button from 'components/button'
import Link from 'components/link'
import { options as typography } from 'theme/typography'

const Logo = styled(Img)`
  min-width: 200px;
  width: 20%;
`

const StyledButton = styled(Button)`
  text-transform: uppercase;
`

const StyledLink = styled(Link)`
  color: inherit;
  font-family: ${typography.headerFontFamily.join(',')};
  font-weight: 500;
  margin: auto;
  text-transform: uppercase;
`

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 7px;
  position: sticky;
  top: 0;
  z-index: 10;
  text-align: center;
  background: #fff;
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <Link to="/">
        <Logo fadeIn={false} fixed={data.file.childImageSharp.fluid} />
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
      <StyledButton font="serif" size="large">
        Reserve Now
      </StyledButton>
    </StyledHeader>
  )
}

export default Header
