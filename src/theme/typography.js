import Typography from 'typography'

import palette from 'theme/palette'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6875,
  headerFontFamily: ['Didot', 'serif'],
  bodyFontFamily: ['Raleway', 'sans-serif'],
  headerColor: palette.text.primary,
  bodyColor: palette.text.primary,
  bodyWeight: 400,
  boldWeight: 700,
  headerWeight: 500,
  scaleRatio: 4,
})

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export const { scale, rhythm, options } = typography
export default typography
