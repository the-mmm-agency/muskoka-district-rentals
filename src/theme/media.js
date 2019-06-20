import { breakpoints as systemBreakpoints } from '@xstyled/system'
import { assoc, mapObjIndexed, curry, pipe, prop } from 'ramda'

import layout from 'theme/layout'

const media = value =>
  `@media (${Array.isArray(value) ? value.join('and') : value})`
const minWidth = curry(bp => `min-width: ${prop(bp, layout.breakpoints)}`)
const maxWidth = curry(bp => `max-width: ${prop(bp, layout.breakpoints)}`)
export const up = pipe(
  minWidth,
  media
)
export const down = pipe(
  maxWidth,
  media
)

export const between = (down, up) => media([minWidth(down), maxWidth(up)])

export const breakpoints = curry(values =>
  systemBreakpoints(values)({ theme: { ...layout } })
)

export const responsiveProp = curry((prop, values) =>
  breakpoints(mapObjIndexed(val => assoc(prop, val)), values)
)
