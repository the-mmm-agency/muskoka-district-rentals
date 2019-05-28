import React from 'react'
import PropTypes from 'prop-types'
import Headroom from 'react-headroom'
import styled from '@emotion/styled'

import Button from 'components/button'
import Logo from 'components/logo'
import Hamburger from 'components/hamburger'
import HeaderLink from 'components/headerLink'

const StyledButton = styled(Button)`
  margin: 24px;
  padding: 10px 30px;
  font-weight: bold;
  font-size: 1rem;
  font-style: bold;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 10px;
  text-align: center;
  background: white;
`

const Header = ({ links }) => (
  <Headroom style={{ zIndex: 999 }}>
    <StyledHeader>
      <Logo />
      {links.map(to => (
        <HeaderLink to={to} key={to} />
      ))}
      <StyledButton fontFamily="serif" size="large">
        Reserve Now
      </StyledButton>
    </StyledHeader>
  </Headroom>
)

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default Header
