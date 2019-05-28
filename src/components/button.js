import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { border, style, themeGet, variant } from 'styled-system'

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

const StyledButton = styled.button`
  &:hover {
    text-decoration: none;
    background: ${themeGet(`colors.primary`)};
    box-shadow: ${themeGet('shadows.2')};
    transform: translateY(-3px);
    @media (hover: none) {
      background-color: transparent;
    }
  }
  transition: ${transitions.create(
    ['border', 'background', 'box-shadow', 'transform'],
    {
      duration: duration.short,
    }
  )};
  ${buttonStyle}
  ${buttonSize}
  ${radius}
  ${border}
  ${typography}
`

const Button = props => <StyledButton {...props} />

Button.propTypes = {
  disabled: PropTypes.bool,
  radius: PropTypes.oneOf(['default', 'curved', 'rounded']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  ...buttonStyle.propTypes,
  ...buttonSize.propTypes,
  ...radius.propTypes,
  ...border.propTypes,
  ...typography.propTypes,
}

Button.defaultProps = {
  size: 'medium',
  radius: 'default',
  variant: 'flat',
}

export default Button
