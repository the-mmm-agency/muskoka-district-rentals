import styled from '@xstyled/emotion'

import Flex from 'elements/flex'
import scrollbars from 'styles/scrollbars.css'

export const Button = styled.button`
  border-radius: 50%;
  font-size: 2rem;
  background: transparent;
  width: 2.5em;
  height: 2.5em;
  position: absolute;
  top: 50%;
`;

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
    width: 100vw;
    ${scrollbars};
  }
`;

export default HorizontalScrollInner;
