import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Wrapper = styled(Link)`
  height: auto;
  width: 5%;
`

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "muskoka-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Wrapper to="/">
      <Img
        critical
        fadeIn
        alt="Muskoka District Rentals"
        fluid={data.logo.childImageSharp.fluid}
      />
    </Wrapper>
  )
}

export default Logo
