import React from 'react'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

import Text from 'elements/text'

const Section = styled(BackgroundImage)`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex-wrap: wrap;
  min-height: 100vh;
  max-height: 100vh;
  padding: 10% 20%;
  text-align: center;
  &::before,
  &::after {
    filter: brightness(0.4);
  }
`

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "welcome.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Section Tag="section" fluid={data.file.childImageSharp.fluid}>
      <Text as="h2" color="white" mb={6}>
        Contact us
      </Text>
      <Text as="h4" color="white">
        Ontario, Canada
      </Text>
      <Text as="p" color="white" mb={5}>
        Port Carling: 113 Medora St <strong>Port Carling</strong> ON Pob 1jo{' '}
        <br />
        Fool&apos;s Bay: 1007 Mcdonald Rd <strong>MacTier</strong> ON PoC 1Ho
        Simcoe <br />
        County: 14-67 Fittons Rd <strong>E Orillia</strong> ON L3V 2J2 <br />
        Toronto: 1520-111 St Clair Av W <strong>Toronto</strong> ON M4V 1N5{' '}
        <br />
        <br />
        <strong>Email</strong>: hello@muskokadistrictrentals.com
      </Text>
      <Text color="text.light">Call toll free:</Text>
      <Text as="h3" color="white">
        +1 800 615 2537
      </Text>
    </Section>
  )
}

export default Contact
