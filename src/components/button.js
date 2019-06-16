import React from 'react'
import styled from '@emotion/styled'
import { border, style, variant } from 'styled-system'
import css from '@styled-system/css'
import propTypes from '@styled-system/prop-types'

import Link from 'components/link'
import { typography } from 'theme/system'
import transitions, { duration } from 'theme/transitions'

const radius = style({
  prop: 'radius',
  cssProperty: 'borderRadius',
  key: 'buttons.radii',
  transformValue: n => n + 'px',
})

const buttonStyle = variant({
  key: 'buttons.variants',
})

const buttonSize = variant({
  key: 'buttons.sizes',
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
    },
    ':active': {
      bg: 'primary',
    },
    svg: {
      verticalAlign: 'baseline',
    },
  })
)
const Button = ({ children, href, linkProps, ...props }) =>
  href ? (
    <Link
      css={{
        ':hover': {
          textDecoration: 'none',
        },
      }}
      to={href}
      {...linkProps}
    >
      <StyledButton {...props}>{children}</StyledButton>
    </Link>
  ) : (
    <StyledButton {...props}>{children}</StyledButton>
  )

Button.propTypes = {
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
