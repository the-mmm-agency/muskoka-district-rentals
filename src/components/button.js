import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { border, style, variant } from 'styled-system'
import css from '@styled-system/css'
import propTypes from '@styled-system/prop-types'

import { typography } from 'theme/system'
import transitions, { duration } from 'theme/transitions'

const radius = style({
  prop: 'radius',
  cssProperty: 'borderRadius',
  key: 'buttonRadii',
  transformValue: n => n + 'px',
})

const buttonStyle = variant({
  key: 'buttonVariants',
})

const buttonSize = variant({
  key: 'buttonSizes',
  prop: 'size',
})

const StyledButton = styled.button(
  buttonStyle,
  buttonSize,
  radius,
  border,
  typography,
  css({
    ':hover': {
      textDecoration: 'none',
      bg: 'primary',
      boxShadow: 2,
      transform: 'translateY(-3px)',
    },
    ':active': {
      bg: 'primary',
    },
    transition: transitions.create(
      ['border', 'background', 'box-shadow', 'transform'],
      {
        duration: duration.short,
      }
    ),
  })
)

const Button = props => <StyledButton {...props} />

Button.propTypes = {
  disabled: PropTypes.bool,
  radius: PropTypes.oneOf(['default', 'curved', 'rounded']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  ...propTypes.radius,
  ...propTypes.buttonSize,
  ...propTypes.buttonStyle,
  ...propTypes.border,
  ...propTypes.typography,
}

Button.defaultProps = {
  size: 'medium',
  radius: 'default',
  variant: 'flat',
}

export default Button
