import React from 'react'
import PropTypes from 'prop-types'

import { StyledHeader, Nav } from './header.css'

import Button from 'components/button'
import Hidden from 'components/hidden'
import Logo from 'components/logo'
import HeaderLink from 'components/headerLink'

const Header = ({ links }) => (
  <StyledHeader>
    <Logo />
    <Nav>
      <span>
        Toll Free Phone #:&nbsp;<a href="tel:1800-615-2537">1800-615-2537</a>
        Email:&nbsp;
        <a href="mailto:hello@muskokadistrictrentals.com">
          hello@muskokadistrictrentals.com
        </a>
      </span>
      <hr />
      {links.map(to => (
        <HeaderLink to={to} key={to} />
      ))}
    </Nav>
    <Hidden down="xl">
      <Button variant="serif" size="wide" m={2} href="/cottages">
        Reserve Now
      </Button>
    </Hidden>
  </StyledHeader>
)

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default Header
