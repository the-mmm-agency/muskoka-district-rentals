import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { ArrowLeft as BackIcon } from 'styled-icons/typicons/ArrowLeft'

import Hamburger from './header.mobile.hamburger'
import { Header } from './header.mobile.css'
import HeaderMenu from './header.mobile.menu'
import Logo from './header.logo'

import Box from 'elements/box'

const MobileHeader = ({ links }) => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }
  const closeMenu = () => {
    setActive(false)
  }
  return (
    <Header active={active}>
      <Box alignSelf="flex-start" display="flex" minHeight="50px" width="100%">
        <Location>
          {({ location: { pathname } }) =>
            pathname === '/' ? (
              <Logo />
            ) : (
              <Link css={{ display: 'inline-flex' }} to="/">
                <BackIcon />
              </Link>
            )
          }
        </Location>
        <Hamburger active={active} onClick={handleClick} ml="auto" />
      </Box>
      <HeaderMenu handleClick={closeMenu} links={links} />
    </Header>
  )
}

MobileHeader.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default MobileHeader
