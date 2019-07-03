import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import PropTypes from 'prop-types'

import useAvailabilityContext from 'hooks/useAvailabilityContext'
import GlobalStyles from 'components/globalStyles'
import theme from 'theme'

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
