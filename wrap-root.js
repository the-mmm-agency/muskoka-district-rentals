import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import PropTypes from 'prop-types'

import useAvailabilityContext from './src/hooks/useAvailabilityContext'
import GlobalStyles from './src/components/globalStyles'
import theme from './src/theme'

const RootWrapper = ({ element }) => (
  <useAvailabilityContext.Provider>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  </useAvailabilityContext.Provider>
)

RootWrapper.propTypes = {
  element: PropTypes.element.isRequired,
}

export default RootWrapper
