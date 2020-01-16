import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { SystemProps, system } from '@xstyled/system'

const Box = styled('div', { shouldForwardProp: shouldForwardProp })<
  SystemProps
>(system);

export default Box;
