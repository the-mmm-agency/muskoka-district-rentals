import styled, { css } from '@xstyled/emotion'

import Link from 'components/link'
import { transition } from 'theme/transitions'
import { StyledHeader } from 'components/header/header.css'

const activeStyle = props => css`
  height: ${props.active ? '35rem' : '60px'};
`

export const MenuLink = styled(Link)`
  font-family: serif;
  font-size: 4;
  text-transform: capitalize;
  color: textPrimary;
  height: 100%;
  width: 100%;
`

export const Header = styled(StyledHeader)`
  padding: 1;
  flex-wrap: wrap;
  overflow: hidden;
  ${activeStyle}
  ${transition('height', { duration: 'shorter' })};
`
