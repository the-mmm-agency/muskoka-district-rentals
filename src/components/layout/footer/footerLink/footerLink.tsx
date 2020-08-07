import React from 'react'
import PropTypes from 'prop-types'

import Link from './footerLink.css'
import format from './format'

const FooterLink = ({ to }) => (
  <li>
    {format(to) == 'cottages' || format(to) == 'blog'
      ?  <a class={'css-1yvyndl'} href={ format(to) == 'cottages' ? 'https://mdr.myvr.com/cottages/#?gp=' : 'https://blogmuskoka.com' }>{format(to)}</a>
    :  <Link to={to}>{format(to)}</Link>
    }
  </li>
)

FooterLink.propTypes = {
  to: PropTypes.string.isRequired,
}

export default FooterLink
