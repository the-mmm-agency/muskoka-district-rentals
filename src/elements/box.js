import styled from 'styled-components'

import { box } from 'theme/system'

const Box = styled('div')(
  {
    boxSizing: 'border-box',
  },
  box
)

Box.propTypes = {
  ...box.propTypes,
}

Box.displayName = 'Box'

export default Box
