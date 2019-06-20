import { compose, style, system } from '@xstyled/system'

export const textDecoration = style({
  prop: 'textDecoration',
  cssProperty: 'textDecoration',
})

export const box = compose(
  system,
  textDecoration,
)
