import React from 'react'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'

const Section = styled(BackgroundImage)`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-height: 100vh;
  padding: 10% 20%;
  text-align: center;
  h2,
  h3,
  h4,
  p {
    color: white;
    strong {
      color: white;
    }
  }
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
      <h2 mb={6}>Contact us</h2>
      <h4>Ontario, Canada</h4>
      <p mb={5}>
        Port Carling: 113 Medora St <strong>Port Carling</strong> ON Pob 1jo{' '}
        <br />
        Fool&apos;s Bay: 1007 Mcdonald Rd <strong>MacTier</strong> ON PoC 1Ho
        Simcoe <br />
        County: 14-67 Fittons Rd <strong>E Orillia</strong> ON L3V 2J2 <br />
        Toronto: 1520-111 St Clair Av W <strong>Toronto</strong> ON M4V 1N5{' '}
        <br />
        <br />
        <strong>Email</strong>: hello@muskokadistrictrentals.com
      </p>
      <span color="text.light">Call toll free:</span>
      <h3>+1 800 615 2537</h3>
    </Section>
  )
}

export default Contact
