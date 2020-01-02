import { Location } from '@reach/router';
import { Link } from 'gatsby';
import React, { FC, useState } from 'react';
import { ArrowLeft as BackIcon } from 'styled-icons/typicons/ArrowLeft';

import Logo from './header.logo';
import { Header } from './header.mobile.css';
import Hamburger from './header.mobile.hamburger';
import HeaderMenu from './header.mobile.menu';

import Box from 'elements/box';

interface MobileHeaderProps {
  links: string[];
}

const MobileHeader: FC<MobileHeaderProps> = ({ links }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const closeMenu = () => {
    setActive(false);
  };
  return (
    <Header active={active}>
      <Box alignSelf="flex-start" display="flex" minHeight="50px" width="100%">
        <Location>
          {({ location: { pathname } }) =>
            pathname === '/' ? (
              <Logo />
            ) : (
              <Link css={{ color: 'inherit', display: 'inline-flex' }} to="/">
                <BackIcon size="50px" />
              </Link>
            )
          }
        </Location>
        <Hamburger active={active} onClick={handleClick} ml="auto" />
      </Box>
      <HeaderMenu handleClick={closeMenu} links={links} />
    </Header>
  );
};

export default MobileHeader;
