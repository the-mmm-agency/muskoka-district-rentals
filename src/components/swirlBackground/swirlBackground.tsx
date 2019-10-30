import React from 'react'
import { css } from '@xstyled/emotion'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'

const SwirlBackground = ({ children, ...props }) => {
  const {
    swirl: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      swirl: file(relativePath: { eq: "swirl.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      css={css`
        &::before,
        &::after {
          background-repeat: repeat;
          background-size: auto;
        }
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 100vh;
        background-repeat: repeat;
        background-position: top left;
        background-size: auto;
      `}
      fluid={fluid}
      tag="section"
      {...props}
    >
      {children}
    </BackgroundImage>
  )
}

export default SwirlBackground
