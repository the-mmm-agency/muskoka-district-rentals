import { useMedia } from 'use-media'

import theme from 'theme'

const makeMedia = ({ up, down, between }) => {
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

export default Hidden
