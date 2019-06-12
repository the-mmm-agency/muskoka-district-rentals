import React from 'react'
import Img from 'gatsby-image'
import { themeGet } from 'styled-system'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'

import Link from 'components/link'

const Wrapper = styled(Link)`
  @media screen and (min-width: ${themeGet('breakpoints.0', '200px')}) {
    min-width: 70px;
  }
  @media screen and (max-width: ${themeGet('breakpoints.0', '200px')}) {
    margin-right: auto;
  }
  width: 40px;
  margin-left: ${themeGet('space.1')};
  height: auto;
  padding: 5px;
`

const Logo = props => {
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
    <Wrapper fade duration={0.5} {...props}>
      <Img
        alt="Muskoka District Rentals"
        imgStyle={{
          objectFit: 'contain',
        }}
        fluid={data.logo.childImageSharp.fluid}
      />
    </Wrapper>
  )
}

export default Logo
