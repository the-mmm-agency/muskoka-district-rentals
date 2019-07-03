import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'
import { Location } from '@reach/router'
import styled from '@xstyled/emotion'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import Box from 'components/box'
import BackIcon from 'components/backIcon'
import Logo from 'components/logo'
import Hamburger from 'components/hamburger'
import HeaderMenu from 'components/headerMenu'
import { transition } from 'theme/transitions'

const Header = styled.header`
  ${props => css`
    height: ${props.active ? '35rem' : '60px'};
  `}
  background: white;
  padding: 1;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;
  text-align: center;
  ${transition('height', { duration: 'shorter' })};
`

const MobileHeader = ({ links }) => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }
  const closeMenu = () => {
    setActive(false)
  }
  return (
    <Header active={active}>
      <Box alignSelf="flex-start" display="flex" minHeight="50px" width="100%">
        <Location>
          {({ location: { pathname } }) =>
            pathname === '/' ? (
              <Logo />
            ) : (
              <Link css={{ display: 'inline-flex' }} to="/">
                <BackIcon />
              </Link>
            )
          }
        </Location>
        <Hamburger active={active} onClick={handleClick} ml="auto" />
      </Box>
      <Fade m="auto" when={active}>
        <HeaderMenu handleClick={closeMenu} links={links} />
      </Fade>
    </Header>
  )
}

MobileHeader.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default MobileHeader
