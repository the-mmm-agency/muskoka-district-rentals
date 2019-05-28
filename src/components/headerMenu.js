import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { themeGet } from 'styled-system'

import Link from 'components/link'

const MenuLink = styled(Link)`
  color: ${themeGet('colors.text.primary')};
  &:active {
    background-color: rgba(0, 0, 0, 0.24);
  }
  &:hover {
    color: ${themeGet('colors.text.primary')};
    text-decoration: none;
  }
  width: 100%;
`

const HeaderMenu = ({ links }) => (
  <div width="100%" display="flex" flexWrap="wrap">
    {links.map(to => (
      <MenuLink key={to} to={to}>
        <span>{to.replace('/', '').replace(/-/g, ' ')}</span>
      </MenuLink>
    ))}
  </div>
)

HeaderMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default HeaderMenu