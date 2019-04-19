import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Logo from '../images/logo.png'

const LogoImage = styled.img`
  margin: 30px;
`
const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  margin-bottom: 1.45rem;
`

const StyledLink = styled(Link)`
  -moz-focus-inner: {
    borderstyle: none;
  }
  appearance: none;
  border: 0;
  border-radius: 0;
  color: inherit;
  cursor: pointer;
  font-weight: 500;
  margin: auto;
  outline: none;
  padding: 0;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
  text-transform: uppercase;
`

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <LogoImage src={Logo} />
    </Link>
    <StyledLink to="/cottages">
      <span>Cottages</span>
    </StyledLink>
    <StyledLink to="/guest-services">
      <span>Guest Services</span>
    </StyledLink>
    <StyledLink to="/rent">
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

export default Header
