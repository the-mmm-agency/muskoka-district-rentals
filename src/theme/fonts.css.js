import { css } from '@emotion/core'
import { fontFace } from 'polished'

const weights = {
  400: 'Regular',
  500: 'Medium',
  600: 'SemiBold',
  700: 'Bold',
}

const makeFontFaces = ({
  fontWeights = Object.keys(weights),
  name,
  fontDisplay = 'auto',
  fileFormats = ['woff2', 'woff'],
}) =>
  fontWeights.map(fontWeight =>
    fontFace({
      fontFamily: name,
      fontFilePath: `/fonts/${name}-${weights[fontWeight]}`,
      fontWeight,
      fileFormats,
      fontDisplay,
    })
  )

const fonts = css`
  ${makeFontFaces({ name: 'Raleway' })}
  ${makeFontFaces({ name: 'Didot', fontWeights: [400, 700] })}
`

export default fonts
