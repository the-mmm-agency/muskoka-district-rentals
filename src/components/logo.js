import React from 'react'
import Img from 'gatsby-image'
import styled from '@xstyled/emotion'
import { graphql, useStaticQuery } from 'gatsby'

import { up, down } from 'theme/media'
import Link from 'components/link'

const Wrapper = styled(Link)`
  ${up('md')} {
    min-width: 60px;
  }
  ${down('md')} {
    margin-right: auto;
  }
  width: 50px;
  margin-left: 1;
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
