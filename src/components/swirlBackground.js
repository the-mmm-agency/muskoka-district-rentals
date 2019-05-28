import React from 'react'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'

import palette from 'theme/palette'

const Image = styled(BackgroundImage)`
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
`

// eslint-disable-next-line react/prop-types
const SwirlBackground = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      swirl: file(relativePath: { eq: "swirl.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Image
      fluid={data.swirl.childImageSharp.fluid}
      backgroundColor={palette.background.default}
      tag="section"
    >
      {children}
    </Image>
  )
}

export default SwirlBackground
