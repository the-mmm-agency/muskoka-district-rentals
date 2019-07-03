import React from 'react'
import PropTypes from 'prop-types'

import { StyledHeader } from './header.css'

import Button from 'components/button'
import Hidden from 'components/hidden'
import Logo from 'components/logo'
import HeaderLink from 'components/headerLink'

const Header = ({ links }) => (
  <StyledHeader>
    <Logo />
    {links.map(to => (
      <HeaderLink to={to} key={to} />
    ))}
    <Hidden down="xl">
      <Button variant="serif" size="wide" m={2} href="/cottages">
        Reserve Now
      </Button>
    </Hidden>
  </StyledHeader>
)

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default Header
