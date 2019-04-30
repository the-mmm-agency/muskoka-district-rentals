import React from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import theme from 'styled-theming'
import { opacify } from 'polished'

import palette from 'theme/palette'
import shadows from 'theme/shadows'
import { options as typography } from 'theme/typography'
import transitions from 'theme/transitions'

const buttonTransition = transitions.create(
  ['border', 'background', 'box-shadow', 'transform'],
  {
    duration: transitions.duration.short,
  }
)

const fontFamily = theme('font', {
  sansSerif: 'Raleway',
  serif: 'Playfair Display',
})

const size = theme('size', {
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
})

const borderRadius = theme('radius', {
  default: '0px',
  curved: '6px',
  rounded: '30px',
})

const buttonVariant = theme('variant', {
  flat: css`
    background: ${props => palette[props.color]};
    border: none;
    color: #fff;
  `,
  outlined: css`
    background: transparent;
    border: 1px solid ${props => opacify(0.5, palette[props.color])};
    &:hover {
      background: ${props => palette[props.color]};
    }
  `,
})

const StyledButton = styled.button`
  &::-moz-focus-inner {
    border-style: 'none';
  }
  &:hover {
    @media (hover: none) {
      background-color: 'transparent';
    }
    box-shadow: ${shadows[2]};
    text-decoration: none;
    transform: translateY(-3px);
  }
  align-items: center;
  appearance: none;
  border-radius: ${borderRadius};
  color: ${palette.text.primary};
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
  text-transform: ${props => props.textTransform};
  vertical-align: middle;
  transition: ${buttonTransition};
  user-select: none;
  ${buttonVariant};
  ${size}
`

const Button = ({ color, font, radius, size, variant, ...rest }) => {
  const theme = {
    font,
    radius,
    size,
    variant,
  }
  return (
    <ThemeProvider theme={theme}>
      <StyledButton color={color} {...rest} />
    </ThemeProvider>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary']),
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
