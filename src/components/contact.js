import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

import { scale } from 'theme/typography'

const Section = styled(BackgroundImage)`
  align-items: center;
  color: white;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  flex-wrap: wrap;
  min-height: 100vh;
  max-height: 100vh;
  padding: 10% 20%;
  text-align: center;
  &::before,
  &::after {
    filter: brightness(0.5);
  }
  p {
    margin-bottom: auto;
  }
  span {
    margin-top: auto;
    font-weight: 700;
    opacity: 0.4;
    margin-bottom: 0;
    width: 100%;
  }
  h3 {
    ${scale(1)}
    color: white;
    width: 100%;
  }
  h4 {
    ${scale(3 / 4)}
    color: white;
    margin-bottom: auto;
    width: 100%;
  }
  h5 {
    ${scale(1 / 2)}
    color: white;
    margin-top: auto;
    width: 100%;
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
      <h3>Contact us</h3>
      <h5>Ontario, Canada</h5>
      <p>
        Port Carling: 113 Medora St <strong>Port Carling</strong> ON Pob 1jo{' '}
        <br />
        Fool&apos;s Bay: 1007 Mcdonald Rd <strong>MacTier</strong> ON PoC 1Ho
        Simcoe <br />
        County: 14-67 Fittons Rd <strong>E Orillia</strong> ON L3V 2J2 <br />
        Toronto: 1520-111 St Clair Av W <strong>Toronto</strong> ON M4V 1N5{' '}
        <br />
        <strong>Email</strong>: hello@muskokadistrictrentals.com
      </p>
      <span>Call toll free:</span>
      <h4>+1 800 615 2537</h4>
    </Section>
  )
}

export default Contact
