import React from 'react'
import PropTypes from 'prop-types'
import { system, variant } from '@xstyled/system'
import styled, { css } from '@xstyled/emotion'

import Link from 'components/link'
import { transition } from 'theme/transitions'

const radii = variant({
  default: 'default',
  prop: 'radius',
  variants: {
    default: css`
      border-radius: 2px;
    `,
    curved: css`
      border-radius: 6px;
    `,
    rounded: css`
      border-radius: 30px;
    `,
  },
})

const transparent = css`
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    box-shadow: none;
    transform: none;
  }
  background: transparent;
  box-shadow: none;
  border: none;
  color: textPrimary;
  font-weight: bold;
  letter-spacing: caps;
  text-transform: uppercase;
  ${transition('background', { duration: 'short' })};
`
const sizes = variant({
  default: 'md',
  prop: 'size',
  variants: {
    sm: css`
      padding: 4px 8px;
      font-size: 0.65rem;
    `,
    md: css`
      padding: 10px 16px;
      font-size: 0.875rem;
    `,
    lg: css`
      padding: 16px 36px;
      font-size: 1rem;
    `,
  },
})

const variants = variant({
  default: 'flat',
  prop: 'variant',
  variants: {
    flat: css`
      &:hover {
        color: white;
        box-shadow: 2;
        transform: translateY(-3px);
        svg {
          fill: white;
        }
      }
      ${transition(['border', 'background', 'box-shadow', 'transform'], {
        duration: 'short',
      })};
      color: white;
      background-color: primary;
    `,
    transparent,
    text: css`
      margin-left: -1rem;
      ${props => transparent(props)}
    `,
  },
})

const StyledButton = styled.button(
  radii,
  system,
  variants,
  sizes,
  css`
    &:hover {
      text-decoration: none;
    }
    svg {
      vertical-align: baseline;
    }
  `
)
const Button = ({ children, href, linkProps, ...props }) =>
  href ? (
    <Link
      css={css`
        &:hover {
          text-decoration: none;
        }
      `}
      to={href}
      {...linkProps}
    >
      <StyledButton {...props}>{children}</StyledButton>
    </Link>
  ) : (
    <StyledButton {...props}>{children}</StyledButton>
  )

Button.propTypes = {
  href: PropTypes.string,
  linkProps: PropTypes.shape(Link.propTypes),
}

export default Button
