import React from 'react'
import PropTypes from 'prop-types'

import { MenuLink } from './header.mobile.css'

import Flex from 'elements/flex'

const HeaderMenu = ({ links, handleClick }) => (
  <Flex as="nav" width="100%" flexWrap="wrap" maxHeight="100%">
    <MenuLink to="/" onClick={handleClick}>
      Home
    </MenuLink>
    {links.map(to => (
      <MenuLink key={to} to={to} onClick={handleClick}>
        {to.replace('/', '').replace(/-/g, ' ')}
      </MenuLink>
    ))}
  </Flex>
)

HeaderMenu.propTypes = {
  handleClick: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default HeaderMenu
