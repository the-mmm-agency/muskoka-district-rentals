import PropTypes from 'prop-types'
import { useMediaLayout } from 'use-media'
import { withTheme } from '@xstyled/emotion'

const makeMedia = ({ up, down, between, theme }) => {
  if (up) {
    return useMediaLayout({ minWidth: theme.breakpoints[up] })
  } else if (down) {
    return useMediaLayout({ maxWidth: theme.breakpoints[down] })
  }
  return useMediaLayout({
    minWidth: theme.breakpoints[between[0]],
    maxWidth: theme.breakpoints[between[1]],
  })
}

const Hidden = ({ children, ...props }) => {
  const hide = makeMedia(props)
  return hide ? null : children
}

Hidden.propTypes = {
  between: PropTypes.string,
  down: PropTypes.string,
  up: PropTypes.string,
}

export default withTheme(Hidden)
