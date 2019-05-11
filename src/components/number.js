import PropTypes from 'prop-types'
import React from 'react'

const Number = ({ children, ...props }) => (
  <span {...props}>{children < 10 ? `0${children}` : children}</span>
)

Number.propTypes = {
  children: PropTypes.number.isRequired,
}

export default Number
