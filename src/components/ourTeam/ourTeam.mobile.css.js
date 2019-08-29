import Img from 'gatsby-background-image'
import styled from '@xstyled/emotion'

export const MemberImage = styled(Img)`
  h4,
  span {
    color: white;
    text-shadow: 1px 1px 8px black;
    margin-left: 2;
  }
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: flex-end;
`
