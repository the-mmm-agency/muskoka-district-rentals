import React from 'react'
import styled from 'styled-components'

import Button from 'components/button'
import Link from 'components/link'
import Logo from 'components/logo'
import { options as typography } from 'theme/typography'

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
  return (
    <StyledHeader>
      <Logo />
      <StyledLink to="/cottages">
        <span>Cottages</span>
      </StyledLink>
      <StyledLink to="/guest-services">
        <span>Guest Services</span>
      </StyledLink>
      <StyledLink to="/about-us">
        <span>About Us</span>
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
