const baseFontSize = 14
const fontSizes = [75, 60, 48, 36, 24, 18, 16].map(
  value => `${value / baseFontSize}rem`
)

export default {
  fontSizes: { ...fontSizes, base: baseFontSize },
  fonts: {
    sans: 'Raleway, sans-serif',
    serif: 'Didot, serif',
  },
  lineHeights: {
    default: 2.14,
    expanded: 1.4,
    header: 1.2,
  },
  fontWeights: {
    bold: 700,
    medium: 500,
    normal: 400,
    semibold: 600,
  },
  letterSpacings: {
    caps: '0.1em',
    headers: '0.3em',
    labels: '0.05em',
    normal: 'normal',
  },
  textStyles: {
    bold: {
      fontWeight: 'bold',
      fontStyle: 'bold',
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
  },
}
