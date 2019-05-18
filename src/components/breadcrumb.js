import React from 'react'
import PropTypes from 'prop-types'

import Box from 'elements/box'
import Link from 'components/link'

const Breadcrumb = ({ crumbs, ...props }) => (
  <Box display="inline-block" {...props}>
    {crumbs.map((crumb, index) => (
      <Link
        key={crumb.link}
        to={crumb.link}
        color={index === crumbs.length - 1 ? 'text.primary' : 'text.secondary'}
        fontWeight="bold"
      >
        {crumb.title}
        {index !== crumbs.length - 1 && <>&nbsp; &gt; &nbsp;</>}
      </Link>
    ))}
  </Box>
)

Breadcrumb.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default Breadcrumb
