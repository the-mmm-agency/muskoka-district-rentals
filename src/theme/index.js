import { map, prop, pipe, pick, values } from 'ramda'

import colors from './palette'
import shadows from './shadows'
import typography, { options, rhythm } from './typography'

const getFontSizes = pipe(
  pick(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  map(prop('fontSize')),
  values
)

const scale = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => 2 ** n)

const space = [
  0,
  ...scale.map(n => {
    // const d = parseFloat(typography.rhythm(1)) / 2
    const x = rhythm(n / 12)
    return x
  }),
]

const styles = typography.toJSON()

const {
  bodyFontFamily,
  headerFontFamily,
  baseLineHeight,
  headerLineHeight,
} = options

const theme = {
  colors,
  fonts: {
    sans: bodyFontFamily.join(','),
    serif: headerFontFamily.join(','),
  },
  fontSizes: getFontSizes(styles),
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
  shadows,
  space,
}

export default theme
