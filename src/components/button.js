import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { opacify } from 'polished'
import { switchProp } from 'styled-tools'

import palette from 'theme/palette'
import shadows from 'theme/shadows'
import { options as typography } from 'theme/typography'
import transitions, { duration } from 'theme/transitions'

const StyledButton = styled.button`
  &::-moz-focus-inner {
    border-style: 'none';
  }
  &:hover {
    background: ${props => palette[props.color]};
    @media (hover: none) {
      background-color: transparent;
    }
    box-shadow: ${shadows[2]};
    text-decoration: none;
    transform: translateY(-3px);
  }
  align-items: center;
  appearance: none;
  border-radius: ${switchProp('radius', {
    default: '0px',
    curved: '6px',
    rounded: '30px',
  })};
  cursor: pointer;
  display: inline-flex;
  font-weight: 500;
  font-family: ${switchProp('font', {
    sansSerif: typography.bodyFontFamily.join(','),
    serif: typography.headerFontFamily.join(','),
  })};
  outline: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  text-decoration: none;
  vertical-align: middle;
  transition: ${transitions.create(
    ['border', 'background', 'box-shadow', 'transform'],
    {
      duration: duration.short,
    }
  )};
  user-select: none;
  ${/* sc-dec */ switchProp('variant', {
    flat: css`
      background: ${props => palette[props.color]};
      border: none;
      color: white;
    `,
    outlined: css`
      background: transparent;
      border: 1px solid ${props => opacify(0.5, palette[props.color])};
      color: ${palette.text.primary};
    `,
  })};
  ${/* sc-dec */ switchProp('size', {
    small: css`
      font-size: 0.65rem;
      padding: 4px 8px;
    `,
    medium: css`
      font-size: 0.875rem;
      padding: 10px 16px;
    `,
    large: css`
      font-size: 1rem;
      padding: 16px 36px;
    `,
  })}
`

const Button = props => {
  return <StyledButton {...props} />
}

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  font: PropTypes.oneOf(['sans-serif', 'serif']),
  radius: PropTypes.oneOf(['default', 'curved', 'rounded']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['flat', 'outlined']),
}

Button.defaultProps = {
  color: 'primary',
  font: 'sans-serif',
  size: 'medium',
  radius: 'default',
  variant: 'flat',
}

export default Button
