import styled from '@xstyled/emotion'

import Flex from 'components/flex'

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
  svg {
    width: 32px;
  }
  a {
    color: textPrimary;
  }
`

export default AppBar
