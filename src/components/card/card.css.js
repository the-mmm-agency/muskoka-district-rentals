import styled from '@xstyled/emotion'

import Flex from 'components/flex'
import { between, down } from 'theme/media'
import { transition } from 'theme/transitions'

export const CardContent = styled(Flex)`
  display: flex;
  height: 40%;
  flex-direction: column;
  padding: 3 4;
  text-align: left;
  a {
    &:hover {
      text-decoration: none;
    }
    font-weight: bold;
    ${transition('color')};
  }
  a,
  span {
    color: textLight;
    margin-bottom: 1;
  }
  ul {
    margin: 2 0;
  }
  h6 {
    margin-bottom: 0;
  }
`

const Card = styled(Flex)`
  display: inline-flex;
  flex-direction: column;
  box-shadow: 1;
  background-color: backgroundLight;
  margin: 3;
  min-width: calc(100% / 3);
  ${between('sm', 'md')} {
    min-width: 50%;
  }
  ${down('sm')} {
    min-width: 100%;
  }
  ${transition(['transform', 'box-shadow'])};
  &:hover {
    box-shadow: 25;
    transform: translateY(-3px);
    a {
      color: textPrimary;
    }
  }
`

export default Card
