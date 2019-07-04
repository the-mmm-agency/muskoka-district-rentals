import React from 'react'
import PropTypes from 'prop-types'

import { MenuLink } from './mobileHeader.css'

import Flex from 'components/flex'

const HeaderMenu = ({ links, handleClick }) => (
  <Flex as="nav" width="100%" flexWrap="wrap" minHeight="100%">
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