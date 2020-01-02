import React, { FC } from 'react';

import { Nav, StyledHeader } from './header.desktop.css';
import HeaderLink, { StyledA } from './header.link';
import Logo from './header.logo';

import Hidden from 'components/hidden';
import ProductionLink from 'components/productionLink/index';
import Button from 'elements/button';

interface HeaderProps {
  links: string[];
}

const Header: FC<HeaderProps> = ({ links }) => (
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
      <StyledA href="https://muskokadistrictrentals.kigobook.com/properties/">
        Cottages
      </StyledA>
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
);

export default Header;
