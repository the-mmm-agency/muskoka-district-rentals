import { css } from '@emotion/core'
import { curry, propOr, includes } from 'ramda'

const hasOrReturn = curry((path, property) => propOr(property, property, path))

const transitions = {
  safeAttributes: [
    'color',
    'border-style',
    'border-color',
    'visibility',
    'background',
    'background-color',
    'text-decoration',
    'box-shadow',
    'transform',
    'opacity',
  ],
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

const getEasing = hasOrReturn(transitions.easing)
const getDuration = hasOrReturn(transitions.duration)

export const transition = (value = transition.safeAttributes, options) => {
  const property = Array.isArray(value) ? value.join(',') : value
  const config = Object.assign(
    { easing: 'easeInOut', duration: 'standard' },
    options
  )

  const { duration, easing } = {
    duration: getDuration(config.duration),
    easing: getEasing(config.easing),
  }

  if (!includes(transition.safeAttributes, value)) {
    console.warn('Using', value, 'for transform property is unsafe')
    console.warn('Please use one of', transition.safeAttributes)
  }

  return css`
    transition-property: ${property};
    transition-duration: ${duration}ms;
    transition-timing-function: ${easing};
    @media screen and (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `
}

export default transitions
