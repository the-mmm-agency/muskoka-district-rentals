import styled from '@xstyled/emotion'

import Flex from 'elements/flex'
import { transition } from 'theme/transitions'

const AppBar = styled(Flex)`
  align-items: center;
  background-color: white;
  position: fixed;
  z-index: header;
  bottom: 0;
  box-shadow: 2;
  width: 100vw;
  height: 56px;
  justify-content: space-evenly;
  .active {
    color: textPrimary;
    ${transition('color')};
    svg {
      ${transition('transform')};
      transform: scale(1.1);
    }
  }
  svg {
    width: 32px;
  }
  a {
    color: textSecondary;
  }
`

export default AppBar
