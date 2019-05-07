import React from 'react'
import styled from 'styled-components'

import palette from 'theme/palette'
import transitions from 'theme/transitions'

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0, 0, 0, 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 4px;
  margin-bottom: 2px;
  transform: scale(0.8);
`

const StyledCheckbox = styled.div`
  &:focus {
    box-shadow: 0 0 0 3px ${palette.primary};
  }
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-top: 0.5em;
  background: ${props => (props.checked ? palette.primary : 'transparent')};
  border: 1px solid ${palette.primary};
  border-radius: 3px;
  transition: ${transitions.create(['background'], {
    duration: transitions.duration.shortest,
  })};
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Checkbox = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

export default Checkbox
