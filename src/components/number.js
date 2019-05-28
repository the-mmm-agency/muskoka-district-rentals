import PropTypes from 'prop-types'
import React from 'react'

import Text from 'elements/text'

const Number = ({ children, ...props }) => (
  <Text {...props}>{children < 10 ? `0${children}` : children}</Text>
)

Number.propTypes = {
  children: PropTypes.number.isRequired,
}

export default Number
