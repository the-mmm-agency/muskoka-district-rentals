import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

import Link from 'components/link'
import { transition } from 'theme/transitions'

const StyledLink = styled(Link)`
  &:hover {
    opacity: 1;
  }
  color: white;
  text-transform: capitalize;
  opacity: 0.4;
  ${transition('opacity')};
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
