import PropTypes from 'prop-types'
import React from 'react'

import { CheckboxLabel } from './checkAvailability.css'

import Checkbox from 'elements/checkbox'

const LabelCheck = ({ label, checked, onChange }) => (
  <label>
    <CheckboxLabel>{label}</CheckboxLabel>
    <Checkbox checked={checked} onChange={onChange} />
  </label>
);

LabelCheck.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LabelCheck;
