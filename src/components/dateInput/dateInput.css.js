import styled from '@xstyled/emotion'

import { up } from 'theme/media'

export const Wrapper = styled.span`
  display: inline-flex;
  align-items: flex-end;
  justify-content: flex-start;
  cursor: pointer;
  padding-right: 1rem;
`

export const Day = styled.h4`
  ${up('sm')} {
    line-height: 1.4;
  }
  height: 50px;
  line-height: 1.85;
  font-weight: 500;
  font-size: 3.3rem;
  vertical-align: baseline;
  margin-right: auto;
`

export const Month = styled.h5`
  font-weight: 400;
  vertical-align: baseline;
  white-space: nowrap;
`
