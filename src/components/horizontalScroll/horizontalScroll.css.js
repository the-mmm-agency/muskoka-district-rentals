import styled from '@xstyled/emotion'

import Flex from 'components/flex'

const HorizontalScrollInner = styled(Flex)`
  width: 100vw;
  div[data-elastic-wrapper='true'] {
    &::after {
      content: '';
      min-width: 10px;
      min-height: 100%;
    }
    display: inline-flex;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    scroll-snap-points-x: repeat(100%);
    overflow-x: scroll;
    overflow-y: hidden;
  }
`

export default HorizontalScrollInner
