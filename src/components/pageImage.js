import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const PageImage = styled(BackgroundImage)`
  * {
    color: white;
  }
  &::before,
  &::after {
    filter: brightness(0.4);
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  text-align: center;
`

export const query = graphql`
  fragment PageImage on File {
    childImageSharp {
      fluid(maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export default PageImage
