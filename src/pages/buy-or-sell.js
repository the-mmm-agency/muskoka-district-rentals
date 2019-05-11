import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import ContactForm from 'components/contactForm'
import Layout from 'components/layout'
import PageImage from 'components/pageImage'
import SEO from 'components/seo'
import { rhythm, scale } from 'theme/typography'

const Wrapper = styled.div`
  h1 {
    ${scale(3 / 4)};
    margin-bottom: ${rhythm(5)};
  }
  h6 {
    ${scale(1 / 4)};
    margin-bottom: ${rhythm(1 / 3)};
  }
  padding: ${rhythm(4)} 15%;
`

const BuyOrSell = () => {
  const data = useStaticQuery(graphql`
    query {
      home: file(relativePath: { eq: "home.jpg" }) {
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
      <PageImage fluid={data.home.childImageSharp.fluid} Tag="section" />
      <Wrapper>
        <h1>Buying or selling a cottage property?</h1>
        <h6>Discover the Difference</h6>
        <p>
          Est ut eu ullamco aute in. Minim anim aute aute incididunt sit non
          Lorem. Amet mollit nostrud ex sunt aliquip. Pariatur sint est ad
          occaecat magna laborum cillum quis magna dolore Lorem consequat mollit
          est. Irure anim aliquip ex ea culpa ut minim. Consectetur qui sunt eu
          do ex. Dolor pariatur est labore pariatur dolor minim. Eiusmod nulla
          occaecat eu reprehenderit deserunt in labore ea esse veniam ut ad
          quis. Fugiat ad eiusmod laborum quis in voluptate aliquip dolor
          officia anim non amet. Ex in anim occaecat aliquip.
        </p>
        <h6>Why buyers purchase from us:</h6>
        <p>
          Est ut eu ullamco aute in. Minim anim aute aute incididunt sit non
          Lorem. Amet mollit nostrud ex sunt aliquip. Pariatur sint est ad
          occaecat magna laborum cillum quis magna dolore Lorem consequat mollit
          est. Irure anim aliquip ex ea culpa ut minim. Consectetur qui sunt eu
          do ex. Dolor pariatur est labore pariatur dolor minim. Eiusmod nulla
          occaecat eu reprehenderit deserunt in labore ea esse veniam ut ad
          quis. Fugiat ad eiusmod laborum quis in voluptate aliquip dolor
          officia anim non amet. Ex in anim occaecat aliquip.
        </p>
        <h6>Buyer Services</h6>
        <p>
          Est ut eu ullamco aute in. Minim anim aute aute incididunt sit non
          Lorem. Amet mollit nostrud ex sunt aliquip. Pariatur sint est ad
          occaecat magna laborum cillum quis magna dolore Lorem consequat mollit
          est. Irure anim aliquip ex ea culpa ut minim. Consectetur qui sunt eu
          do ex. Dolor pariatur est labore pariatur dolor minim. Eiusmod nulla
          occaecat eu reprehenderit deserunt in labore ea esse veniam ut ad
          quis. Fugiat ad eiusmod laborum quis in voluptate aliquip dolor
          officia anim non amet. Ex in anim occaecat aliquip.
        </p>
        <h6>Why owners list with us:</h6>
        <p>
          Est ut eu ullamco aute in. Minim anim aute aute incididunt sit non
          Lorem. Amet mollit nostrud ex sunt aliquip. Pariatur sint est ad
          occaecat magna laborum cillum quis magna dolore Lorem consequat mollit
          est. Irure anim aliquip ex ea culpa ut minim. Consectetur qui sunt eu
          do ex. Dolor pariatur est labore pariatur dolor minim. Eiusmod nulla
          occaecat eu reprehenderit deserunt in labore ea esse veniam ut ad
          quis. Fugiat ad eiusmod laborum quis in voluptate aliquip dolor
          officia anim non amet. Ex in anim occaecat aliquip.
        </p>
        <h6>Owner Services</h6>
        <p>
          Est ut eu ullamco aute in. Minim anim aute aute incididunt sit non
          Lorem. Amet mollit nostrud ex sunt aliquip. Pariatur sint est ad
          occaecat magna laborum cillum quis magna dolore Lorem consequat mollit
          est. Irure anim aliquip ex ea culpa ut minim. Consectetur qui sunt eu
          do ex. Dolor pariatur est labore pariatur dolor minim. Eiusmod nulla
          occaecat eu reprehenderit deserunt in labore ea esse veniam ut ad
          quis. Fugiat ad eiusmod laborum quis in voluptate aliquip dolor
          officia anim non amet. Ex in anim occaecat aliquip.
        </p>
        <ContactForm />
      </Wrapper>
    </Layout>
  )
}

export default BuyOrSell
