import React, { useState } from 'react'
import { withPrefix } from 'gatsby'
import styled from '@emotion/styled'
import Fade from 'react-reveal/Fade'
import { ifProp } from 'styled-tools'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import BackIcon from 'components/backIcon'
import Logo from 'components/logo'
import Hamburger from 'components/hamburger'
import HeaderMenu from 'components/headerMenu'
import transitions from 'theme/transitions'

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: ${ifProp('active', '30rem', '50px')};
  overflow: hidden;
  text-align: center;
  transition: ${transitions.create('height', { duration: '0.175s' })};
`

const BackButton = styled(AniLink)`
  margin-right: auto;
  margin: auto 0;
`

const MobileHeader = ({ links, location }) => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }
  const isHome = location && location.pathname === withPrefix('/')
  return (
    <StyledHeader bg="white" active={active} p={1}>
      <div alignSelf="flex-start" display="flex" minHeight="50px" width="100%">
        {isHome ? (
          <Logo />
        ) : (
          <BackButton fade to="/">
            <BackIcon />
          </BackButton>
        )}
        <Hamburger active={active} onClick={handleClick} ml="auto" />
      </div>
      <Fade m="auto" when={active}>
        <HeaderMenu links={links} />
      </Fade>
    </StyledHeader>
  )
}

MobileHeader.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default MobileHeader
