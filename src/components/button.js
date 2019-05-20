import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { prop } from 'styled-tools'
import { fontFamily, themeGet, border, style, variant } from 'styled-system'
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
})

const StyledButton = styled.button`
  &:hover {
    background: ${themeGet(`colors.${prop('color')}`)};
    @media (hover: none) {
      background-color: transparent;
    }
    box-shadow: ${themeGet('shadows.2')};
    text-decoration: none;
    transform: translateY(-3px);
  }
  transition: ${transitions.create(
    ['border', 'background', 'box-shadow', 'transform'],
    {
      duration: duration.short,
    }
  )};
  ${buttonStyle}
  ${buttonSize}
  ${fontFamily}
  ${radius}
  ${border}
`

const Button = props => <StyledButton {...props} />

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  radius: PropTypes.oneOf(['default', 'curved', 'rounded']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  ...buttonStyle.propTypes,
  ...buttonSize.propTypes,
  ...radius.propTypes,
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
