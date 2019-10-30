import ProductionLink from 'components/productionLink/index'
import Flex from 'elements/flex'
import PropTypes from 'prop-types'
import React from 'react'

import {
  ExternalLink,
  GatsbyLink
} from './header.mobile.css'

const HeaderMenu = ({ links, handleClick }) => (
  <Flex as="nav" width="100%" flexWrap="wrap" maxHeight="100%">
    <GatsbyLink to="/" onClick={handleClick}>
      Home
    </GatsbyLink>
    {links.map(to => (
      <GatsbyLink key={to} to={to} onClick={handleClick}>
        {to.replace('/', '').replace(/-/g, ' ')}
      </GatsbyLink>
    ))}
    <ProductionLink to="/login">Login/Register</ProductionLink>
  </Flex>
)

HeaderMenu.propTypes = {
  handleClick: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default HeaderMenu
