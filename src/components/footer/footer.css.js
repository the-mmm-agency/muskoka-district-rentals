import styled from '@xstyled/emotion'
import Img from 'gatsby-image'

export const StyledFooter = styled.footer`
  background-color: footer;
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5;
`

export const Hr = styled.hr`
  border-color: rgba(255, 255, 255, 0.2);
`

export const Copyright = styled.span`
  align-self: center;
  margin-left: 1;
  opacity: 0.5;
`

export const Logo = styled(Img)`
  width: 230px;
  height: 60px;
  margin: 2;
`
