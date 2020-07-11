import React from 'react'
import PropTypes from 'prop-types'

import Link from './footerLink.css'
import format from './format'

const FooterLink = ({ to }) => (
  <li>
    <Link to={(format(to) == 'cottages' ? 'https://mdr.myvr.com/cottages/#?gp=' : (format(to) == 'blog' ? 'https://blogmuskoka.com' : to))}>{format(to)}</Link>
  </li>
)

FooterLink.propTypes = {
  to: PropTypes.string.isRequired,
}

export default FooterLink
