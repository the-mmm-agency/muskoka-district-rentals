import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['GFS Didot', 'serif'],
  bodyFontFamily: [
    'Raleway',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'sans-serif',
  ],
  googleFonts: [
    {
      name: 'Raleway',
      styles: ['400', '700'],
    },
    {
      name: 'Playfair Display',
      styles: ['400', '700'],
    },
  ],
})

export default typography
