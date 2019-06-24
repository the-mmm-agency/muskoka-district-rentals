import React from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'
import Headroom from 'react-headroom'
import styled from '@xstyled/emotion'

import Button from 'components/button'
import Hidden from 'components/hidden'
import Logo from 'components/logo'
import HeaderLink from 'components/headerLink'

const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: [0.4, 0, 0.6, 1],
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: [0.4, 0, 0.2, 1],
    },
  },
})

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
  <AnimatedContainer>
    <Headroom style={{ zIndex: 999 }}>
      <StyledHeader>
        <Logo />
        {links.map(to => (
          <HeaderLink to={to} key={to} />
        ))}
        <Hidden down="xl">
          <StyledButton fontFamily="serif" size="large">
            Reserve Now
          </StyledButton>
        </Hidden>
      </StyledHeader>
    </Headroom>
  </AnimatedContainer>
)

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default Header
