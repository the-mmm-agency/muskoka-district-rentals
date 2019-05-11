import React from 'react'
import Headroom from 'react-headroom'
import styled from 'styled-components'

import Button from 'components/button'
import Logo from 'components/logo'
import HeaderLink from 'components/headerLink'

const StyledButton = styled(Button)`
  text-transform: uppercase;
  padding: 10px 30px;
  font-size: 0.8rem;
  margin: 24px;
`

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  text-align: center;
  background: white;
  padding: 10px;
`

const Header = () => (
  <Headroom>
    <StyledHeader>
      <Logo />
      <HeaderLink to="/cottages" />
      <HeaderLink to="/guest-services" />
      <HeaderLink to="/about-us" />
      <HeaderLink to="/rent-your-cottage" />
      <HeaderLink to="/buy-or-sell" />
      <HeaderLink to="/private-fleet" />
      <StyledButton font="serif" size="large">
        Reserve Now
      </StyledButton>
    </StyledHeader>
  </Headroom>
)

export default Header
