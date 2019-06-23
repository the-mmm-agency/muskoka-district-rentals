import React from 'react'

import Box from 'components/box'

const Heading = props => <Box {...props}>{props.children}</Box>

Heading.defaultProps = {
  as: 'h2',
}

export default Heading
