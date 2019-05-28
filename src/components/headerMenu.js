import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Slide from 'react-reveal/Slide'
import { themeGet } from 'styled-system'

import Link from 'components/link'

const MenuLink = styled(Link)`
  color: ${themeGet('colors.text.primary')};
  &:active {
    background-color: rgba(0, 0, 0, 0.24);
  }
  &:hover {
    color: ${themeGet('colors.text.primary')};
    width: 100%;
    text-decoration: none;
  }
`

const HeaderMenu = ({ isOpen, links }) => (
  <Slide top collapse when={isOpen}>
    <div position="absolute" bg="light" width="100%" top={0}>
      <ul>
        {links.map(to => (
          <MenuLink key={to} to={to}>
            <span>{to.replace('/', '').replace(/-/g, ' ')}</span>
          </MenuLink>
        ))}
      </ul>
    </div>
  </Slide>
)

HeaderMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default HeaderMenu
