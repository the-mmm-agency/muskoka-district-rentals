import { compose, system, style, variant } from '@xstyled/system'

export const textDecoration = style({
  prop: 'textDecoration',
  cssProperty: 'textDecoration',
})

export const textStyles = variant({
  default: 'default',
  key: 'textStyles',
})

export const buttonRadii = variant({
  default: 'default',
  prop: 'radius',
  key: 'buttons.radii',
})

export const buttonSizes = variant({
  default: 'md',
  prop: 'size',
  key: 'buttons.sizes',
})

export const buttonVariants = variant({
  default: 'flat',
  key: 'buttons.variants',
})

export const box = compose(
  textDecoration,
  textStyles,
  system
)
