import styled from '@xstyled/emotion'

import Link from 'components/link'
import { down } from 'theme/media'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5;
  margin-bottom: 4;
  justify-content: center;
  overflow-x: scroll;
  div[data-elastic-wrapper='true'] {
    &::before {
      content: '';
      min-width: 30px;
      min-height: 100%;
    }
    ${down('sm')} {
      width: 100vw;
    }
    width: initial;
  }
`

export const Category = styled(Link)`
  font-size: 5;
  margin-right: 4;
  font-weight: bold;
  text-transform: capitalize;
  white-space: nowrap;
  font-family: serif;
  color: textPrimary;
`
