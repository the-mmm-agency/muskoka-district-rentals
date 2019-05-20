import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import Link from 'components/link'

const StyledLink = styled(Link)`
  &:hover {
    opacity: 1;
  }
  color: #fff;
  opacity: 0.4;
  text-transform: capitalize;
  transition: opacity ease 0.3s;
`

const FooterLink = ({ to }) => (
  <li>
    <StyledLink to={to}>{to.replace('/', '').replace('-', ' ')}</StyledLink>
  </li>
)

FooterLink.propTypes = {
  to: PropTypes.string.isRequired,
}

export default FooterLink
