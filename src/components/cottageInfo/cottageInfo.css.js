import styled from '@xstyled/emotion'

export const List = styled.ul`
  width: 100%;
  margin-top: 4;
  margin-left: 0;
  list-style: none;
`

export const Item = styled.li`
  margin-bottom: 1;
  font-weight: bold;
  span:last-of-type {
    color: textPrimary;
  }
`
