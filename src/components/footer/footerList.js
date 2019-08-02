import React from 'react'
import PropTypes from 'prop-types'

import FooterLink from './footerLink/footerLink'

const FooterList = ({ links }) => (
  <ul css={{ listStyle: 'none', width: '25%' }}>
    {links.map(link => (
      <FooterLink to={link} key={link} />
    ))}
  </ul>
)

FooterList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default FooterList
