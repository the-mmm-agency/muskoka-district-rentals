import React from 'react'
import css from '@styled-system/css'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const PageImage = props => (
  <BackgroundImage
    {...props}
    css={css({
      '*': {
        color: 'white',
      },
      '::before, ::after': {
        filter: 'brightness(0.4)',
      },
      display: 'flex',
      flexDirection: 'column',
      height: [200, 300, 400, 500],
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    })}
  />
)

export const query = graphql`
  fragment PageImage on File {
    childImageSharp {
      fluid(maxHeight: 1000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export default PageImage
