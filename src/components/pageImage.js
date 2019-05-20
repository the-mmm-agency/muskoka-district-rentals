import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'

const PageImage = styled(BackgroundImage)`
  &::before,
  &::after {
    filter: brightness(0.4);
  }
  height: 40vh;
`
export default PageImage
