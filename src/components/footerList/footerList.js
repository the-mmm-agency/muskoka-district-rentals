import React from 'react'
import PropTypes from 'prop-types'

import FooterLink from 'components/footerLink'

const FooterList = ({ links }) => {
  return (
    <ul css={{ listStyle: 'none' }}>
      {links.map(link => (
        <FooterLink to={link} key={link} />
      ))}
    </ul>
  )
}

FooterList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default FooterList
