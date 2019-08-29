import styled from '@emotion/styled'
import { system, variant } from '@xstyled/system'
import shouldForwardProp from '@styled-system/should-forward-prop'

const textStyles = variant({
  default: 'default',
  key: 'textStyles',
})

const Heading = styled('h2', { shouldForwardProp: shouldForwardProp })(
  system,
  textStyles
)

export default Heading
