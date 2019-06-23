import React from 'react'
import styled from '@xstyled/emotion'
import PropTypes from 'prop-types'

import Flex from 'components/flex'
import Link from 'components/link'

const MenuLink = styled(Link)`
  color: textPrimary;
  &:active {
    background-color: rgba(0, 0, 0, 0.24);
  }
  &:hover {
    color: textPrimary;
    text-decoration: none;
  }
  height: 100%;
  width: 100%;
`

const HeaderMenu = ({ links, handleClick }) => (
  <Flex as="nav" width="100%" flexWrap="wrap" minHeight="100%">
    <MenuLink to="/" onClick={handleClick} fontSize={4} fontFamily="serif">
      <span>Home</span>
    </MenuLink>
    {links.map(to => (
      <MenuLink
        key={to}
        to={to}
        onClick={handleClick}
        textTransform="capitalize"
        fontSize={4}
        fontFamily="serif"
      >
        <span>{to.replace('/', '').replace(/-/g, ' ')}</span>
      </MenuLink>
    ))}
  </Flex>
)

HeaderMenu.propTypes = {
  handleClick: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default HeaderMenu
