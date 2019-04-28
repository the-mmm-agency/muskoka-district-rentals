import Typography from 'typography'

import palette from 'theme/palette'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6875,
  googleFonts: [
    {
      name: 'Playfair Display',
      styles: ['500', '700'],
    },
    {
      name: 'Raleway',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Playfair Display', 'serif'],
  bodyFontFamily: ['Raleway', 'sans-serif'],
  headerColor: palette.text.primary,
  bodyColor: palette.text.primary,
  bodyWeight: 400,
  boldWeight: 700,
  headerWeight: 700,
  scaleRatio: 4,
  overrideStyles: () => ({
    html: {
      '-moz-osk-font-smoothing': 'grayscale',
      '-webkit-font-smoothing': 'subpixel-anitaliased',
    },
    'h1,h2,h3,h4,h5,h6': {
      letterSpacing: '0.1em',
    },
  }),
})

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export const { scale, rhythm, options } = typography
export default typography
