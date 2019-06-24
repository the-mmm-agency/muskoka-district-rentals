import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import GlobalStyles from 'components/globalStyles'
import theme from 'theme'

const RootWrapper = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)

export default RootWrapper
