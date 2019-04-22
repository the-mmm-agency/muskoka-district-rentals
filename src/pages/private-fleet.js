import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Layout from 'components/layout'
import SEO from 'components/seo'
import { rhythm } from 'utils/typography'

const Wrapper = styled.div`
  padding: ${rhythm(1)} 20%;
`

const Image = styled(BackgroundImage)`
  height: 400px;
  &::before,
  &::after {
    filter: brightness(0.4);
  }
`

const BuyOrSell = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "private-fleet.jpg" }) {
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
      <SEO title="Buy or Sell Cottages" />
      <Image fluid={data.file.childImageSharp.fluid} Tag="section" />
      <Wrapper>
        <h1>PRIVATEE FLEET</h1>
        <h6>
          Enroll in PRIVATE FLEET ©. It's Simple and Secure. A Simple and safe
          way to offset the costs of boat ownership
        </h6>
        <ul>
          <li>Generates rental income when your boat is not in use</li>
          <li>
            Turnkey service from boater screening through return inspections
          </li>
          <li>
            Full damage & liability coverage by Billy's Powerspoarts
            Muskokafleet insurance
          </li>
          <li>All renter boat captains are guaranteed BoatSmart certified</li>
          <li>Complete boat detailing and fuel costs paid by guests</li>
        </ul>
        <h6>For more information orto enroll in PRIVATE FLEET © contact us!</h6>
      </Wrapper>
    </Layout>
  )
}

export default BuyOrSell
