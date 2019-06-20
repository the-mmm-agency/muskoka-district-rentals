import { css } from '@emotion/core'

const transitions = {
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
}

export const transition = (value, options) => {
  const { duration, easing } = Object.assign(
    { easing: 'easeInOut', duration: 'standard' },
    options
  )

  return css`
    transition: ${Array.isArray(value) ? value.join(',') : value}
      ${transitions.duration[duration]}ms ${transitions.easing[easing]};
    @media screen and (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `
}

export default transitions
