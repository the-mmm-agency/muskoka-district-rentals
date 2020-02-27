import Menu from '@material/react-menu'
import React, { FC, useState } from 'react'
import { ChevronDown } from 'react-feather'

import CottageMenu from './header.cottages'
import { GatsbyLink, Text } from './header.mobile.css'

import Flex from 'elements/flex'

interface HeaderMenuProps {
  handleClick: () => void;
  links: string[];
}

const HeaderMenu: FC<HeaderMenuProps> = ({ links, handleClick }) => {
  const [menuOpen, setMenu] = useState(false);

  const [menuAnchor, setMenuAnchor] = useState(null);
  const openMenu = event => {
    setMenuAnchor(event.currentTarget);
    setMenu(true);
  };
  return (
    <Flex as="nav" width="100%" flexWrap="wrap" maxHeight="100%">
      <GatsbyLink to="/" onClick={handleClick}>
        Home
      </GatsbyLink>
      <Menu
        open={menuOpen}
        anchorElement={menuAnchor}
        onClose={() => setMenu(false)}
      >
        <CottageMenu />
      </Menu>
      <Text onClick={openMenu}>
        Locations <ChevronDown size="1em" />
      </Text>
      {links.map(to => (
        <GatsbyLink key={to} to={to} onClick={handleClick}>
          {to.replace('/', '').replace(/-/g, ' ')}
        </GatsbyLink>
      ))}
    </Flex>
  );
};

export default HeaderMenu;
