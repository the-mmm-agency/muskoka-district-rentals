import React from 'react'
import PropTypes from 'prop-types'

import Box from 'elements/box'
import Link from 'elements/link'

const Breadcrumb = ({ crumbs, activeColor, color, ...props }) => (
  <Box display="inline-block" {...props}>
    {crumbs.map(({ link, title }, index) => (
      <>
        <Link
          key={link}
          to={title}
          color={index === crumbs.length - 1 ? activeColor : color}
          fontWeight="bold"
          dangerouslySetInnerHTML={{ __html: title }}
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
