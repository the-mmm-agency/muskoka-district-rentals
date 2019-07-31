import React from 'react'
import PropTypes from 'prop-types'

import Box from 'components/box'
import Link from 'components/link'

const Breadcrumb = ({ crumbs, activeColor, color, ...props }) => (
  <Box display="inline-block" {...props}>
    {crumbs.map((crumb, index) => (
      <>
        <Link
          key={crumb.link}
          to={crumb.link}
          color={index === crumbs.length - 1 ? activeColor : color}
          fontWeight="bold"
          dangerouslySetInnerHTML={{ __html: crumb.title }}
        />
        {index !== crumbs.length - 1 && <>&nbsp; &gt; &nbsp;</>}
      </>
    ))}
  </Box>
)

Breadcrumb.defaultProps = {
  activeColor: 'textPrimary',
  color: 'textLight',
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
