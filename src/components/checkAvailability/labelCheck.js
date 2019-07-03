import React from 'react'
import PropTypes from 'prop-types'

import { CheckboxLabel } from './checkAvailability.css'

import Checkbox from 'components/checkbox'

const LabelCheck = ({ label, checked, onChange }) => (
  <label>
    <CheckboxLabel>{label}</CheckboxLabel>
    <Checkbox checked={checked} onChange={onChange} />
  </label>
)

LabelCheck.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default LabelCheck
