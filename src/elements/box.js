import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'

import { box } from 'theme/system'

const Box = styled('div', { shouldForwardProp })(
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
