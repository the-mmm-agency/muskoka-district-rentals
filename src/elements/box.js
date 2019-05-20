import styled from '@emotion/styled'

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
