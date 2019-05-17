import React from 'react'
import Headroom from 'react-headroom'
import styled from 'styled-components'

import Button from 'components/button'
import Logo from 'components/logo'
import HeaderLink from 'components/headerLink'

const StyledButton = styled(Button)`
  font-weight: bold;
  font-style: bold;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 10px 30px;
  font-size: 1rem;
  margin: 24px;
`

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  text-align: center;
  background: white;
  padding: 10px;
`

const Header = () => (
  <Headroom style={{ zIndex: 999 }}>
    <StyledHeader>
      <Logo />
      <HeaderLink to="/cottages" />
      <HeaderLink to="/guest-services" />
      <HeaderLink to="/about-us" />
      <HeaderLink to="/rent-your-cottage" />
      <HeaderLink to="/buy-or-sell" />
      <HeaderLink to="/private-fleet" />
      <StyledButton fontFamily="serif" size="large">
        Reserve Now
      </StyledButton>
    </StyledHeader>
  </Headroom>
)

export default Header
