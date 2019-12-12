import { css } from '@xstyled/emotion';

import { transition } from 'theme/transitions';

const buttons = {
  radii: {
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
  sizes: {
    sm: css`
      padding: 0.28rem 0.57rem;
      font-size: 0.65rem;
    `,
    md: css`
      padding: 0.7rem 1.15rem;
      font-size: 0.875rem;
    `,
    lg: css`
      padding: 1.2rem 2.5rem;
      font-size: 1rem;
    `,
  },
  variants: {
    flat: css`
      &:hover {
        color: white;
        box-shadow: 2;
        transform: translateY(-3px);
      }
      ${transition(['box-shadow', 'transform'], {
        duration: 'short',
      })};
      color: white;
      background-color: primary;
      svg {
        fill: white;
      }
    `,
    serif: css`
      &:hover {
        color: white;
        box-shadow: 2;
        transform: translateY(-3px);
      }
      ${transition(['box-shadow', 'transform'], {
        duration: 'short',
      })};
      color: white;
      background-color: primary;
      letter-spacing: buttons;
      text-transform: uppercase;
      font-family: serif;
      font-weight: bold;
      svg {
        fill: white;
      }
    `,
    transparent: css`
      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
      color: textPrimary;
      font-weight: bold;
      letter-spacing: caps;
      text-transform: uppercase;
      background: transparent;
      border: none;
      box-shadow: none;
      svg {
        fill: textPrimary;
      }
      ${transition('background', { duration: 'short' })};
    `,
  },
};

export default buttons;
