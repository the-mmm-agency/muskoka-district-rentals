import React from 'react'
import PropTypes from 'prop-types'

import { Button, Inner } from './hamburger.css'

const Hamburger = ({ active, ...props }) => (
  <Button ariaLabel="Menu" ariaControls="navigation" {...props}>
    <span>
      <Inner active={active} />
    </span>
  </Button>
)

Hamburger.defaultProps = {
  active: false,
}

Hamburger.propTypes = {
  active: PropTypes.bool,
}

export default Hamburger
