import React from 'react'
import Headroom from 'react-headroom'
import styled from 'styled-components'

import Button from 'components/button'
import Link from 'components/link'
import Logo from 'components/logo'
import { options as typography } from 'theme/typography'
import transitions from 'theme/transitions'

const StyledButton = styled(Button)`
  text-transform: uppercase;
  padding: 10px 30px;
  font-size: 0.8rem;
  margin: 24px;
`

const StyledLink = styled(Link)`
  color: inherit;
  font-family: ${typography.headerFontFamily.join(',')};
  font-weight: bold;
  font-style: bold;
  margin: auto;
  text-transform: uppercase;
  padding: 10px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: stretch;
  transition: ${transitions.create('background')};
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  text-align: center;
  background: #fff;
  padding: 10px;
`

const Header = () => (
  <Headroom>
    <StyledHeader>
      <StyledLink to="/">
        <Logo />
      </StyledLink>
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
  </Headroom>
)

export default Header
