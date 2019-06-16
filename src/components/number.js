import PropTypes from 'prop-types'
import React from 'react'

const Number = ({ children, Tag, ...props }) => (
  <Tag {...props}>{children < 10 ? `0${children}` : children}</Tag>
)

Number.defaultProps = {
  Tag: 'span',
}

Number.propTypes = {
  Tag: PropTypes.string,
  children: PropTypes.number.isRequired,
}

export default Number
