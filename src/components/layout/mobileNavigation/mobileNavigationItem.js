import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const MobileNavigationItem = ({ href, to, icon }) =>
  to ? (
    <Link activeClassName="active" to={to}>
      {icon}
    </Link>
  ) : (
    <a href={href}>{icon}</a>
  )

MobileNavigationItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.element.isRequired,
  to: PropTypes.string,
}

export default MobileNavigationItem
