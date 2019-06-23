import React from 'react'
import PropTypes from 'prop-types'
import { variant } from '@xstyled/system'
import styled, { css } from '@xstyled/emotion'

import { controlFocus } from 'theme/control'
import { transition } from 'theme/transitions'

const sizes = variant({
  default: 'md',
  prop: 'size',
  variants: {
    sm: css`
      width: 0.875rem;
      height: 0.875rem;
      border-radius: sm;
      svg {
        width: 8px;
        height: 8px;
      }
    `,
    md: css`
      width: 1rem;
      height: 1rem;
      border-radius: md;
      svg {
        width: 10px;
        height: 10px;
      }
    `,
    lg: css`
      width: 1.25rem;
      height: 1.25rem;
      border-radius: lg;
      svg {
        width: 12px;
        height: 12px;
      }
    `,
  },
})

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
  pointer-events: none;
  transform: scale(0);
  transform-origin: center;
  color: white;
  visibility: hidden;
  ${transition(['transform', 'visibility'])};
`

const colorStyle = props => css`
  border-color: ${props.color};
  input:checked + & {
    background-color: ${props.color};
  }
  input:focus + & {
    ${controlFocus(props.color)(props)}
  }
`

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 0.5rem;
  border-width: 1px;
  border-style: solid;
  ${transition(['background', 'box-shadow'])};
  ${props => colorStyle(props)}
  ${sizes}
  input:checked + & {
    border-color: transparent;
    svg {
      visibility: visible;
      transform: scale(1);
    }
  }
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Checkbox = ({ checked, color, size, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} type="checkbox" {...props} />
    <StyledCheckbox checked={checked} color={color} size={size}>
      <Icon className="sui-checkbox-check" viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
        />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

Checkbox.defaultProps = {
  color: 'primary',
  size: 'md',
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
}

export default Checkbox
