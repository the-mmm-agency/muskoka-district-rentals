import React from 'react'
import PropTypes from 'prop-types'

import Link from './footerLink.css'
import format from './format'

const FooterLink = ({ to }) => (
  <li>
    <Link to={to  + '/#?gp='}>{format(to)}</Link>
  </li>
)

FooterLink.propTypes = {
  to: PropTypes.string.isRequired,
}

export default FooterLink
