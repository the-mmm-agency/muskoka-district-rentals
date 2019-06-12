import { graphql } from 'gatsby'
import React from 'react'

import ContactForm from 'components/contactForm'
import PageImage from 'components/pageImage'
import SEO from 'components/seo'

const BuyOrSell = ({ data: { home } }) => (
  <>
    <SEO title="Buy or Sell Cottages" />
    <PageImage fluid={home.childImageSharp.fluid} Tag="section" />
    <div
      css={{
        h6: {
          mb: 2,
        },
      }}
      px={[3, 6]}
      py={5}
    >
      <h1 fontSize={2} mb={6}>
        Buying or selling a cottage property?
      </h1>
      <h6>Discover the Difference</h6>
      <p>
        Est ut eu ullamco aute in. Minim anim aute aute incididunt sit non
        Lorem. Amet mollit nostrud ex sunt aliquip. Pariatur sint est ad
        occaecat magna laborum cillum quis magna dolore Lorem consequat mollit
        est. Irure anim aliquip ex ea culpa ut minim. Consectetur qui sunt eu do
        ex. Dolor pariatur est labore pariatur dolor minim. Eiusmod nulla
        occaecat eu reprehenderit deserunt in labore ea esse veniam ut ad quis.
        Fugiat ad eiusmod laborum quis in voluptate aliquip dolor officia anim
        non amet. Ex in anim occaecat aliquip.
      </p>
      <h6>Why buyers purchase from us:</h6>
      <p>
        Est ut eu ullamco aute in. Minim anim aute aute incididunt sit non
        Lorem. Amet mollit nostrud ex sunt aliquip. Pariatur sint est ad
        occaecat magna laborum cillum quis magna dolore Lorem consequat mollit
        est. Irure anim aliquip ex ea culpa ut minim. Consectetur qui sunt eu do
        ex. Dolor pariatur est labore pariatur dolor minim. Eiusmod nulla
        occaecat eu reprehenderit deserunt in labore ea esse veniam ut ad quis.
        Fugiat ad eiusmod laborum quis in voluptate aliquip dolor officia anim
        non amet. Ex in anim occaecat aliquip.
      </p>
      <h6>Buyer Services</h6>
      <p>
        Est ut eu ullamco aute in. Minim anim aute aute incididunt sit non
        Lorem. Amet mollit nostrud ex sunt aliquip. Pariatur sint est ad
        occaecat magna laborum cillum quis magna dolore Lorem consequat mollit
        est. Irure anim aliquip ex ea culpa ut minim. Consectetur qui sunt eu do
        ex. Dolor pariatur est labore pariatur dolor minim. Eiusmod nulla
        occaecat eu reprehenderit deserunt in labore ea esse veniam ut ad quis.
        Fugiat ad eiusmod laborum quis in voluptate aliquip dolor officia anim
        non amet. Ex in anim occaecat aliquip.
      </p>
      <h6>Why owners list with us:</h6>
      <p>
        Est ut eu ullamco aute in. Minim anim aute aute incididunt sit non
        Lorem. Amet mollit nostrud ex sunt aliquip. Pariatur sint est ad
        occaecat magna laborum cillum quis magna dolore Lorem consequat mollit
        est. Irure anim aliquip ex ea culpa ut minim. Consectetur qui sunt eu do
        ex. Dolor pariatur est labore pariatur dolor minim. Eiusmod nulla
        occaecat eu reprehenderit deserunt in labore ea esse veniam ut ad quis.
        Fugiat ad eiusmod laborum quis in voluptate aliquip dolor officia anim
        non amet. Ex in anim occaecat aliquip.
      </p>
      <h6>Owner Services</h6>
      <p>
        Est ut eu ullamco aute in. Minim anim aute aute incididunt sit non
        Lorem. Amet mollit nostrud ex sunt aliquip. Pariatur sint est ad
        occaecat magna laborum cillum quis magna dolore Lorem consequat mollit
        est. Irure anim aliquip ex ea culpa ut minim. Consectetur qui sunt eu do
        ex. Dolor pariatur est labore pariatur dolor minim. Eiusmod nulla
        occaecat eu reprehenderit deserunt in labore ea esse veniam ut ad quis.
        Fugiat ad eiusmod laborum quis in voluptate aliquip dolor officia anim
        non amet. Ex in anim occaecat aliquip.
      </p>
      <ContactForm />
    </div>
  </>
)

export const query = graphql`
  query {
    home: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxHeight: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default BuyOrSell
