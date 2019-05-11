import Typography from 'typography'

import palette from 'theme/palette'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.8,
  headerFontFamily: ['Didot', 'serif'],
  bodyFontFamily: ['Raleway', 'sans-serif'],
  headerColor: palette.text.primary,
  bodyColor: palette.text.secondary,
  bodyWeight: 500,
  boldWeight: 700,
  headerWeight: 700,
  scaleRatio: 5,
})

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export const { scale, rhythm, options } = typography
export default typography
