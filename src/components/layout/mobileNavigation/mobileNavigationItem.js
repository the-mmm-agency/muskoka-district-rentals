import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Ripples from 'react-ripples'

const MobileNavigationItem = ({ href, to, icon }) => (
  <Ripples>
    {to ? (
      <Link activeClassName="active" to={to}>
        {icon}
      </Link>
    ) : (
      <a href={href}>{icon}</a>
    )}
  </Ripples>
)

MobileNavigationItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.element.isRequired,
  to: PropTypes.string,
}

export default MobileNavigationItem
