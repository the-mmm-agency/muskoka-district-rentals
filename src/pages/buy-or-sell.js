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
    filter: brightness(0.4);
  }
`

const BuyOrSell = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home.jpg" }) {
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
        <h1>Buying or selling a cottage property?</h1>
        <h6>Discover the Difference</h6>
        <p>
          Veniam consectetur exercitation exercitation laboris fugiat irure in
          fugiat exercitation ullamco ad Lorem.
        </p>
        <h6>Why buyers purchase from us:</h6>
        <p>
          Veniam consectetur exercitation exercitation laboris fugiat irure in
          fugiat exercitation ullamco ad Lorem.
        </p>
        <h6>Buyer Services</h6>
        <p>
          Veniam consectetur exercitation exercitation laboris fugiat irure in
          fugiat exercitation ullamco ad Lorem.
        </p>
        <h6>Why owners list with us:</h6>
        <p>
          Veniam consectetur exercitation exercitation laboris fugiat irure in
          fugiat exercitation ullamco ad Lorem.
        </p>
        <h6>Owner Services</h6>
        <p>
          Veniam consectetur exercitation exercitation laboris fugiat irure in
          fugiat exercitation ullamco ad Lorem.
        </p>
      </Wrapper>
    </Layout>
  )
}

export default BuyOrSell
