import styled from '@xstyled/emotion'

import Link from 'components/link'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5;
  margin-bottom: 4;
  justify-content: center;
  min-width: 100%;
`

export const Category = styled(Link)`
  font-size: 5;
  margin-right: 4;
  font-weight: bold;
  text-transform: capitalize;
  font-family: serif;
  color: textPrimary;
`
