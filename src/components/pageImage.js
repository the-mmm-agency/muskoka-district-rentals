import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const PageImage = styled(BackgroundImage)`
  &::before,
  &::after {
    filter: brightness(0.4);
  }
  height: 40vh;
`
export default PageImage
