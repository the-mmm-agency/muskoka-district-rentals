import styled from '@xstyled/emotion'
import emStyled from '@emotion/styled'
import { system } from '@xstyled/system'

import Flex from 'components/flex'
import { down } from 'theme/media'
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
    margin-bottom: auto;
  }
`

const Card = styled(Flex)`
  .gatsby-image-wrapper {
    min-height: 60%;
    min-width: 100%;
  }
  display: inline-flex;
  flex-direction: column;
  box-shadow: 1;
  background-color: backgroundLight;
  margin: 3;
  flex-shrink: 0;
  flex-grow: 0;
  min-width: calc(100% / 3);
  max-width: calc(100% / 3);
  ${down('lg')} {
    min-width: 50%;
    max-width: 50%;
  }
  ${down('md')} {
    min-width: 75%;
    max-width: 75%;
  }
  ${down('sm')} {
    min-width: 100%;
    max-width: 100%;
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

const SystemCard = emStyled(Card)`
  ${system}
`

export default SystemCard
