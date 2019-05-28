import React, { useState } from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import Logo from 'components/logo'
import Hamburger from 'components/hamburger'
import HeaderMenu from 'components/headerMenu'

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  text-align: center;
`

const MobileHeader = ({ links }) => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }
  return (
    <StyledHeader bg="white">
      <div display="flex" width="100%">
        <Logo mr="auto" />
        <Hamburger active={active} onClick={handleClick} ml="auto" />
      </div>
      {active && <HeaderMenu links={links} />}
    </StyledHeader>
  )
}

MobileHeader.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default MobileHeader
