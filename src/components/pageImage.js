import React from 'react'
import css from '@styled-system/css'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const PageImage = props => (
  <BackgroundImage
    {...props}
    Tag="section"
    fadeIn
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
      minHeight: 'fit-content',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    })}
  />
)

export const query = graphql`
  fragment PageImage on File {
    childImageSharp {
      fluid(maxWidth: 4096) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export default PageImage
