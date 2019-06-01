import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import ContactForm from 'components/contactForm'
import PageImage from 'components/pageImage'
import SEO from 'components/seo'

const BuyOrSell = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "private-fleet.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxHeight: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Buy or Sell Cottages" />
      <PageImage fluid={data.file.childImageSharp.fluid} Tag="section" />
      <div px={4} py={5}>
        <h1 fontSize={2}>Private Fleet</h1>
        <h6>
          Enroll in Private Fleet ©. It&apos;s Simple and Secure. A Simple and
          safe way to offset the costs of boat ownership
        </h6>
        <ul>
          <li>Generates rental income when your boat is not in use</li>
          <li>
            Turnkey service from boater screening through return inspections
          </li>
          <li>
            Full damage & liability coverage by Billy&apos;s Power Sports
            Muskoka fleet insurance
          </li>
          <li>All renter boat captains are guaranteed BoatSmart certified</li>
          <li>Complete boat detailing and fuel costs paid by guests</li>
        </ul>
        <h6>
          For more information or to enroll in PRIVATE FLEET © contact us!
        </h6>
        <ContactForm />
      </div>
    </>
  )
}

export default BuyOrSell
