import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

import palette from 'theme/palette'

const Image = styled(BackgroundImage)`
  &::before,
  &::after {
    background-size: auto;
    background-repeat: repeat;
  }
  background-position: top left;
  background-size: auto;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
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
