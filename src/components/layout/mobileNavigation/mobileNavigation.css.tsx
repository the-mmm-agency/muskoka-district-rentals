import styled, { css } from '@xstyled/emotion'

import Flex from 'elements/flex'
import { transition } from 'theme/transitions'

const active = css`
  color: textPrimary;
  svg {
    transform: scale(1.2);
  }
`

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
  a {
    color: textLight;
    svg {
      width: 32px;
      ${transition('transform')};
    }
    ${transition('color')};
    &.active {
      ${active}
    }
  }
`

export default AppBar
