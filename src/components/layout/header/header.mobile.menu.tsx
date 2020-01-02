import React, { FC } from 'react';

import { ExternalLink, GatsbyLink } from './header.mobile.css';

import ProductionLink from 'components/productionLink/index';
import Flex from 'elements/flex';

interface HeaderMenuProps {
  handleClick: () => void;
  links: string[];
}

const HeaderMenu: FC<HeaderMenuProps> = ({ links, handleClick }) => (
  <Flex as="nav" width="100%" flexWrap="wrap" maxHeight="100%">
    <GatsbyLink to="/" onClick={handleClick}>
      Home
    </GatsbyLink>
    <ExternalLink href="https://muskokadistrictrentals.kigobook.com/properties">
      Cottages
    </ExternalLink>
    {links.map(to => (
      <GatsbyLink key={to} to={to} onClick={handleClick}>
        {to.replace('/', '').replace(/-/g, ' ')}
      </GatsbyLink>
    ))}
    <ProductionLink to="/login">Login/Register</ProductionLink>
  </Flex>
);

export default HeaderMenu;
