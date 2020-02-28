import Menu from '@material/react-menu'
import React, { FC, useState } from 'react'
import { ChevronDown } from 'react-feather'

import CottageMenu from './header.cottages'
import { Nav, StyledHeader } from './header.desktop.css'
import HeaderLink, { StyledA } from './header.link'
import Logo from './header.logo'

import Hidden from 'components/hidden'

interface HeaderProps {
  links: string[];
}

const Header: FC<HeaderProps> = ({ links }) => {
  const [menuOpen, setMenu] = useState(false);

  const [menuAnchor, setMenuAnchor] = useState(null);
  const openMenu = event => {
    setMenuAnchor(event.currentTarget);
    setMenu(true);
  };
  return (
    <StyledHeader>
      <Logo to="/" />
      <Nav>
        <span>
          Toll Free Phone #:&nbsp;<a href="tel:1800-615-2537">1.800.615.2537</a>
          Email:&nbsp;
          <a href="mailto:hello@muskokadistrictrentals.com">
            hello@muskokadistrictrentals.com
          </a>
        </span>

        <hr />
        <Menu
          open={menuOpen}
          anchorElement={menuAnchor}
          onClose={() => setMenu(false)}
        >
          <CottageMenu />
        </Menu>
        <StyledA onClick={openMenu}>
          Locations <ChevronDown size="1em" />
        </StyledA>
        {links.map(to => (
          <HeaderLink to={to} key={to} />
        ))}
      </Nav>
    </StyledHeader>
  );
};

export default Header;
