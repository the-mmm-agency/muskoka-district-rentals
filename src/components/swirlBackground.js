import React from 'react'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'

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
const SwirlBackground = ({ children, theme }) => {
  const { swirl } = useStaticQuery(graphql`
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
    <Image fluid={swirl.childImageSharp.fluid} tag="section">
      {children}
    </Image>
  )
}

export default SwirlBackground
