import React from 'react'
import PropTypes from 'prop-types'

import { GatsbyLink, ExternalLink } from './header.mobile.css'

import Flex from 'elements/flex'

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
    <ExternalLink href="https://mdr5.wpengine.com/login/">
      Login/Register
    </ExternalLink>
  </Flex>
)

HeaderMenu.propTypes = {
  handleClick: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default HeaderMenu
