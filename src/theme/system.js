import {
  compose,
  boxShadow,
  background,
  border,
  width,
  color,
  flex,
  alignSelf,
  textAlign,
  flexBasis,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  space,
  style,
  textStyle,
} from 'styled-system'

const textDecoration = style({
  prop: 'textDecoration',
  cssProperty: 'textDecoration',
})

const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'textTransform',
})

export const box = compose(
  space,
  border,
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