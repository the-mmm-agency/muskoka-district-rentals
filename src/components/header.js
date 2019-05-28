import React from 'react'
import Headroom from 'react-headroom'
import styled from '@emotion/styled'

import Button from 'components/button'
import Logo from 'components/logo'
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
