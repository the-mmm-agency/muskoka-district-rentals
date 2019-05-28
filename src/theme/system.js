import {
  alignItems,
  alignSelf,
  background,
  border,
  boxShadow,
  color,
  compose,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  fontFamily,
  fontSize,
  fontWeight,
  justifyContent,
  letterSpacing,
  lineHeight,
  space,
  style,
  textAlign,
  textStyle,
  width,
} from 'styled-system'

export const fontStyle = style({
  prop: 'fontStyle',
  cssProperty: 'fontStyle',
})

export const textDecoration = style({
  prop: 'textDecoration',
  cssProperty: 'textDecoration',
})

export const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'textTransform',
})

export const box = compose(
  space,
  border,
  fontStyle,
  boxShadow,
  background,
  width,
  color,
  flex,
  alignSelf,
  textAlign
)

export const flexbox = compose(
  flexBasis,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
)

export const typography = compose(
  fontStyle,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textTransform,
  textDecoration,
  textStyle,
  textAlign,
  space,
  color
)
