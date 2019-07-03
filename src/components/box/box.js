import styled from '@emotion/styled'
import { system } from '@xstyled/system'
import shouldForwardProp from '@styled-system/should-forward-prop'

const Box = styled('div', { shouldForwardProp })(system)

export default Box
