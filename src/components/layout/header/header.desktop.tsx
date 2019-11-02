import Hidden from 'components/hidden'
import ProductionLink from 'components/productionLink/index'
import Button from 'elements/button'
import PropTypes from 'prop-types'
import React from 'react'

import { Nav, StyledHeader } from './header.desktop.css'
import HeaderLink from './header.link'
import Logo from './header.logo'

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
        <ProductionLink to="/login">Login/Register</ProductionLink>
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
