import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from '@xstyled/emotion'

import { controlFocus } from 'theme/control'
import { transition } from 'theme/transitions'

const HiddenCheckbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
`

const Icon = styled.svg`
  margin-bottom: 2px;
  transform: scale(0.8);
  fill: none;
  stroke: white;
  stroke-width: 4px;
`

const StyledCheckbox = styled.div`
  ${props =>
    props.checked
      ? css`
          background: color('primary');
          svg {
            visibility: visible;
          }
        `
      : css`
          background: transparent;
          svg {
            visibility: hidden;
          }
        `}
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-top: 0.5em;
  border: 1px solid;
  border-color: primary;
  border-radius: 2px;
  ${transition(['background', 'box-shadow'])};
  input:hover + & {
    ${props => controlFocus('primary')(props)}
  }
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Checkbox = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} type="checkbox" {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
}

export default Checkbox
