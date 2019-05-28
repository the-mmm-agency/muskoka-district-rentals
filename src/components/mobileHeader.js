import React, { useState } from 'react'
import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'
import PropTypes from 'prop-types'

import BackIcon from 'components/backIcon'
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
  height: ${ifProp('active', '50vh', '50px')};
  overflow: hidden;
  padding: 10px;
  text-align: center;
  transition: ${transitions.create('height', { duration: '0.175s' })};
`

const MobileHeader = ({ links }) => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }
  return (
    <StyledHeader bg="white" active={active}>
      <div alignSelf="flex-start" display="flex" width="100%">
        <BackIcon
          mr="auto"
          onClick={() => {
            window.history.back()
          }}
        />
        <Hamburger active={active} onClick={handleClick} ml="auto" />
      </div>
      <HeaderMenu links={links} />
    </StyledHeader>
  )
}

MobileHeader.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default MobileHeader
