import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

import { scale, rhythm } from 'theme/typography'

const Call = styled.span`
  margin-top: ${rhythm(1 / 2)};
  font-weight: 700;
  opacity: 0.4;
  width: 100%;
`
const H5 = styled.h5`
  ${scale(1 / 2)}
  color: #fff;
  margin-bottom: 25px;
  width: 100%;
`
const ContactUs = styled.h3`
  ${scale(0.8)}
  color: #fff;
  width: 100%;
`

const H4 = styled.h4`
  ${scale(3 / 4)}
  color: #fff;
  width: 100%;
`

const Section = styled(BackgroundImage)`
  align-items: center;
  color: #fff;
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
      <ContactUs>Contact us</ContactUs>
      <H5>Ontario, Canada</H5>
      <p>
        Port Carling: 113 Medora St <strong>Port Carling</strong> ON Pob 1jo{' '}
        <br />
        Fool's Bay: 1007 Mcdonald Rd <strong>MacTier</strong> ON PoC 1Ho Simcoe{' '}
        <br />
        County: 14-67 Fittons Rd <strong>E Orillia</strong> ON L3V 2J2 <br />
        Toronto: 1520-111 St Clair Av W <strong>Toronto</strong> ON M4V 1N5{' '}
        <br />
        <strong>Email</strong>: hello@muskokadistrictrentals.com
      </p>
      <Call>Call toll free:</Call>
      <H4>+1 800 615 2537</H4>
    </Section>
  )
}

export default Contact
