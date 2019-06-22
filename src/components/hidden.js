import PropTypes from 'prop-types'
import { useMedia } from 'use-media'
import { withTheme } from '@xstyled/emotion'

import theme from 'theme'

const makeMedia = ({ up, down, between, theme }) => {
  if (up) {
    return useMedia({ minWidth: theme.breakpoints[up] })
  } else if (down) {
    return useMedia({ maxWidth: theme.breakpoints[down] })
  }
  return useMedia({
    minWidth: theme.breakpoints[between[0]],
    maxWidth: theme.breakpoints[between[1]],
  })
}

const Hidden = ({ children, ...props }) => {
  const hide = makeMedia(props)
  return hide ? null : children
}

Hidden.propTypes = {
  between: PropTypes.arrayOf(PropTypes.oneOf(theme.breakpoints)),
  down: PropTypes.oneOf(theme.breakpoints),
  up: PropTypes.oneOf(theme.breakpoints),
}
export default withTheme(Hidden)
