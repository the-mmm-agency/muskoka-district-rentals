import styled from '@emotion/styled'
import { css } from '@xstyled/emotion'
import { system, variant } from '@xstyled/system'
import PropTypes from 'prop-types'
import React from 'react'

import Link from 'elements/link'
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
});

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
});

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
      font-weight: bold;
      text-align: center;
      font-family: serif;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      background-color: primary;
    `,
    transparent: css`
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        box-shadow: none;
        transform: none;
      }
      color: textPrimary;
      font-weight: bold;
      letter-spacing: caps;
      text-transform: uppercase;
      background: transparent;
      border: none;
      box-shadow: none;
      ${transition('background', { duration: 'short' })};
    `,
  },
});

const StyledButton = styled.button(radii, system, variants, sizes);

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

Button.propTypes = {
  linkProps: PropTypes.shape(Link.propTypes),
  to: PropTypes.string,
};

export default Button;
