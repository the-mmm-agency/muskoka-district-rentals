import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Layout from 'components/layout'
import SEO from 'components/seo'
import { rhythm } from 'theme/typography'

const Wrapper = styled.div`
  padding: ${rhythm(1)} 20%;
`

const Image = styled(BackgroundImage)`
  height: 400px;
  &::before,
  &::after {
    filter: brightness(0.8);
  }
`

const GuestServices = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "guest-services.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxHeight: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Guest Services" />
      <Image fluid={data.file.childImageSharp.fluid} Tag="section" />
      <Wrapper>
        <h1>Guest Services</h1>
        <h6>Reserve your vacation rental with MDR.</h6>
        <h6>Guest Pre-approval Registration</h6>
        <p>
          Veniam consectetur exercitation exercitation laboris fugiat irure in
          fugiat exercitation ullamco ad Lorem.
        </p>
        <h6>Vacation Property Searches</h6>
        <p>
          Veniam consectetur exercitation exercitation laboris fugiat irure in
          fugiat exercitation ullamco ad Lorem.
        </p>
        <h6>Guest Concierge</h6>
        <p>
          Veniam consectetur exercitation exercitation laboris fugiat irure in
          fugiat exercitation ullamco ad Lorem.
        </p>
        <h6>Travel Insurance</h6>
        <p>
          Veniam consectetur exercitation exercitation laboris fugiat irure in
          fugiat exercitation ullamco ad Lorem.
        </p>
      </Wrapper>
    </Layout>
  )
}

export default GuestServices
