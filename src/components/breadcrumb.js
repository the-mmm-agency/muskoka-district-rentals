import React from 'react'
import PropTypes from 'prop-types'

import Link from 'components/link'

const Breadcrumb = ({ crumbs, activeColor, color, ...props }) => (
  <div display="inline-block" {...props}>
    {crumbs.map((crumb, index) => (
      <Link
        key={crumb.link}
        to={crumb.link}
        color={index === crumbs.length - 1 ? activeColor : color}
        fontWeight="bold"
      >
        {crumb.title}
        {index !== crumbs.length - 1 && <>&nbsp; &gt; &nbsp;</>}
      </Link>
    ))}
  </div>
)

Breadcrumb.defaultProps = {
  activeColor: 'text.primary',
  color: 'text.secondary',
}

Breadcrumb.propTypes = {
  activeColor: PropTypes.string,
  color: PropTypes.string,
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default Breadcrumb
