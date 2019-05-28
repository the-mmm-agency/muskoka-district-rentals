import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'

import Link from 'components/link'

const Wrapper = styled(Link)`
  min-width: 70px;
  height: auto;
  margin-left: 16px;
  padding: 2px;
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
        critical
        alt="Muskoka District Rentals"
        fluid={data.logo.childImageSharp.fluid}
      />
    </Wrapper>
  )
}

export default Logo
