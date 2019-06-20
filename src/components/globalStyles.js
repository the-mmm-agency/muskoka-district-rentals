import React from 'react'
import { withTheme } from '@xstyled/emotion'
import { Global } from '@emotion/core'

import normalize from 'styles/normalize.css'
import globalStyle from 'styles/global.css'
import fonts from 'styles/fonts.css'

const GlobalStyles = props => (
  <>
    <Global styles={normalize(props)} />
    <Global styles={globalStyle(props)} />
    <Global styles={fonts(props)} />
  </>
)

export default withTheme(GlobalStyles)
