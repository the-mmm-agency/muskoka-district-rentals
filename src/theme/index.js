import colors from 'theme/palette'
import shadows from 'theme/shadows'
import { options, rhythm } from 'theme/typography'
import transitions, { duration } from 'theme/transitions'

const baseFontSize = 14

const fontSizes = [75, 60, 48, 36, 24, 18, 16].map(
  value => `${value / baseFontSize}rem`
)

const scale = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => 2 ** n)

const space = [
  0,
  ...scale.map(n => {
    const x = rhythm(n / 12)
    return x
  }),
]

const {
  bodyFontFamily,
  headerFontFamily,
  baseLineHeight,
  headerLineHeight,
} = options

const theme = {
  colors,
  breakpoints: ['40em', '52em', '64em', '80em'],
  buttonRadii: {
    default: 2,
    curved: 6,
    rounded: 30,
  },
  buttonSizes: {
    small: {
      fontSize: '0.65rem',
      padding: '4px 8px',
    },
    medium: {
      fontSize: '0.875rem',
      padding: '10px 16px',
    },
    large: {
      fontSize: '1rem',
      padding: '16px 36px',
    },
  },
  buttonVariants: {
    flat: {
      background: colors.primary,
      border: 'none',
      color: colors.white,
    },
    outlined: {
      background: 'transparent',
      border: '1px solid colors.primary',
      color: colors.text.primary,
    },
    transparent: {
      '&:hover': {
        background: 'rgba(0, 0, 0, 0.1)',
        boxShadow: 'none',
        transform: 'none',
      },
      background: 'transparent',
      boxShadow: 'none',
      border: 'none',
      color: colors.text.primary,
      fontWeight: 'bold',
      letterSpacing: 'letterSpacings.caps',
      textTransform: 'uppercase',
      transition: transitions.create('background', {
        duration: duration.short,
      }),
      fontStyle: 'bold',
    },
  },
  fonts: {
    sans: bodyFontFamily.join(','),
    serif: headerFontFamily.join(','),
  },
  fontSizes: { ...fontSizes, base: baseFontSize },
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
  lineHeights: {
    default: baseLineHeight,
    expanded: 1.4,
    header: headerLineHeight,
  },
  radii: [2, 4, 8, 30],
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
  transitions,
  shadows,
  space,
}

export default theme
