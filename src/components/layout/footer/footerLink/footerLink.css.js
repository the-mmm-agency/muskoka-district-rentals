import styled from '@xstyled/emotion'

import Link from 'elements/link'
import { transition } from 'theme/transitions'

const StyledLink = styled(Link)`
  &:hover {
    opacity: 1;
  }
  color: white;
  text-transform: capitalize;
  opacity: 0.4;
  ${transition('opacity')};
`

export default StyledLink
