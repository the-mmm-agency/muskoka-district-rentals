import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { system, variant } from '@xstyled/system'
import { css } from '@xstyled/emotion'

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

const sizes = variant({
  default: 'md',
  prop: 'size',
  variants: {
    sm: css`
      padding: 4px 8px;
      font-size: 0.65rem;
    `,
    md: css`
      padding: 2 3;
      font-size: 0.875rem;
    `,
    lg: css`
      padding: 16px 36px;
      font-size: 1rem;
    `,
    wide: css`
      padding: 10px 30px;
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
      ${transition(['box-shadow', 'transform'], {
        duration: 'short',
      })};
      color: white;
      background-color: primary;
    `,
    serif: css`
      &:hover {
        color: white;
        box-shadow: 2;
        transform: translateY(-3px);
        svg {
          fill: white;
        }
      }
      ${transition(['box-shadow', 'transform'], {
        duration: 'short',
      })};
      color: white;
      text-transform: uppercase;
      font-family: serif;
      background-color: primary;
      letter-spacing: 0.1em;
      font-weight: bold;
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
      color: textPrimary;
      font-weight: bold;
      letter-spacing: caps;
      text-transform: uppercase;
      ${transition('background', { duration: 'short' })};
    `,
  },
})

const StyledButton = styled.button(radii, system, variants, sizes)

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
