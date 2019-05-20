import styled from '@emotion/styled'

import Box from './box'

import { flexbox } from 'theme/system'

const Flex = styled(Box)(
  {
    display: 'flex',
  },
  flexbox
)

Flex.displayName = 'Flex'

Flex.propTypes = {
  ...flexbox.propTypes,
}

export default Flex
