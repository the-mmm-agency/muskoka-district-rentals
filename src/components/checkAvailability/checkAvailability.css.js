import styled from '@xstyled/emotion'

import Flex from 'components/flex'
import { up } from 'theme/media'

export const Wrapper = styled(Flex)`
  ${up('md')} {
    flex-wrap: nowrap;
    background-color: backgroundLight;
    border-color: transparent;
    box-shadow: 25;
  }
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  border-bottom: 0.5px solid;
  border-color: textSecondary;
  width: 100%;
  margin-top: 3;
  z-index: 100;
`

export const SectionWrapper = styled(Flex)`
  ${up('md')} {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin: 2;
  height: 100%;
`

export const Section = styled(Flex)`
  ${up('md')} {
    flex: 0 0 25%;
    max-width: 25%;
  }
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: calc(100% / 3);
  max-width: calc(100% / 3);
  padding: 3;
`

export const CheckboxLabel = styled.span`
  margin-right: 2;
  color: secondary;
  font-family: serif;
`

export const Header = styled.span`
  width: 100%;
  margin-bottom: 2;
  color: textSecondary;
  font-weight: 700;
  font-size: 0.875rem;
  text-align: left;
  text-transform: uppercase;
`
