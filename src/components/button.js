import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { rgba } from 'polished'
import { switchProp } from 'styled-tools'
import { fontFamily, themeGet, border } from 'styled-system'

import palette from 'theme/palette'
import transitions, { duration } from 'theme/transitions'

const StyledButton = styled.button`
  &:hover {
    background: ${props => palette[props.color]};
    @media (hover: none) {
      background-color: transparent;
    }
    box-shadow: ${themeGet('shadows.2')};
    text-decoration: none;
    transform: translateY(-3px);
  }
  border-radius: ${switchProp('radius', {
    default: '2px',
    curved: '6px',
    rounded: '30px',
  })};
  transition: ${transitions.create(
    ['border', 'background', 'box-shadow', 'transform'],
    {
      duration: duration.short,
    }
  )};
  ${switchProp('variant', {
    flat: css`
      background: ${themeGet('colors.text.primary')};
      border: none;
      color: white;
    `,
    outlined: css`
      background: transparent;
      border: 1px solid ${props => rgba(props.theme.colors.text.primary, 0.5)};
      color: ${themeGet('colors.text.primary')};
    `,
    transparent: css`
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        box-shadow: none;
        transform: none;
      }
      background: transparent;
      box-shadow: none;
      border: none;
      color: ${themeGet('colors.text.primary')};
      font-weight: bold;
      font-style: bold;
      letter-spacing: ${themeGet('letterSpacings.caps')};
      text-transform: uppercase;
      transition: ${transitions.create('background', {
        duration: duration.short,
      })}

      border: none;
      font-weight: bold;
      font-style: bold;
    `,
  })};
  ${switchProp('size', {
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
  ${fontFamily}
  ${border}
`

const Button = props => <StyledButton {...props} />

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  radius: PropTypes.oneOf(['default', 'curved', 'rounded']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['flat', 'outlined']),
  ...fontFamily.propTypes,
  ...border.propTypes,
}

Button.defaultProps = {
  color: 'primary',
  size: 'medium',
  radius: 'default',
  variant: 'flat',
}

export default Button
