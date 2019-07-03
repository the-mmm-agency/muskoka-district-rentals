import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Location } from '@reach/router'
import { Link } from 'gatsby'

import { Header } from './mobileHeader.css'
import HeaderMenu from './headerMenu'

import Box from 'components/box'
import BackIcon from 'components/backIcon'
import Logo from 'components/logo'
import Hamburger from 'components/hamburger'

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
