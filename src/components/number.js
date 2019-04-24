import React from 'react'

const Number = ({ children }) => (
  <span>{children < 10 ? `0${children}` : children}</span>
)

export default Number
