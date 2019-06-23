import React from 'react'

import Box from 'components/box'

const Text = props => <Box {...props}>{props.children}</Box>

Text.defaultProps = {
  as: 'span',
}

export default Text
