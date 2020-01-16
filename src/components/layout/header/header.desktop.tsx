import React, { FC } from 'react'

import { Nav, StyledHeader } from './header.desktop.css'
import HeaderLink, { StyledA } from './header.link'
import Logo from './header.logo'

import Hidden from 'components/hidden'
import ProductionLink from 'components/productionLink/index'
import Button from 'elements/button'

interface HeaderProps {
  links: string[];
}

const Header: FC<HeaderProps> = ({ links }) => (
  <StyledHeader>
    <Logo to="/" />
    <Nav>
      <span>
        Toll Free Phone #:&nbsp;<a href="tel:1800-615-2537">1800-615-2537</a>
        Email:&nbsp;
        <a href="mailto:hello@muskokadistrictrentals.com">
          hello@muskokadistrictrentals.com
        </a>
        <ProductionLink to="/wp-admin">Login/Register</ProductionLink>
      </span>

      <hr />
      <Hidden down="xl">
        <StyledA href="https://muskokadistrictrentals.kigobook.com/properties/">
          All Cottages
        </StyledA>
      </Hidden>
      {links.map(to => (
        <HeaderLink to={to} key={to} />
      ))}
    </Nav>
    <Button
      as={ProductionLink}
      to="/properties"
      variant="serif"
      size="wide"
      role="link"
      m={2}
    >
      Book Now
    </Button>
  </StyledHeader>
);

export default Header;
