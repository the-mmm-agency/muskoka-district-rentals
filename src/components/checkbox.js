import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'
import { themeGet } from '@styled-system/theme-get'
import { rgba } from 'polished'

import transitions from 'theme/transitions'

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
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-top: 0.5em;
  background: ${ifProp('checked', themeGet('colors.primary'), 'transparent')};
  border: 1px solid ${themeGet('colors.primary')};
  border-radius: 2px;
  transition: ${transitions.create(['background', 'box-shadow'])};
  ${HiddenCheckbox}:hover + & {
    box-shadow: 0 0 0 3px ${props => rgba(props.theme.colors.primary, 0.2)};
  }
  ${Icon} {
    visibility: ${ifProp('checked', 'visible', 'hidden')};
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
