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
  svg {
    width: 1.2em;
    height: 1.2em;
    margin-bottom: 0.6em;
    margin-right: 0.5em;
  }
  span {
    &:first-of-type {
      color: textLight;
    }
    &:last-of-type {
      color: textPrimary;
    }
  }
`
