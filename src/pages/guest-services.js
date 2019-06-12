import { graphql } from 'gatsby'
import React from 'react'

import ContactForm from 'components/contactForm'
import PageImage from 'components/pageImage'
import GuestService from 'components/guestService'
import SEO from 'components/seo'

const GuestServices = ({ data }) => (
  <>
    <SEO title="Guest Services" />
    <PageImage fluid={data.header.childImageSharp.fluid} Tag="section" />
    <div py={[4, 5]} px={[3, 6]}>
      <h1 mb={3} fontSize={2}>
        Guest Services
      </h1>
      <h2 fontSize={5} ml={1}>
        Reserve your vacation with MDR.
      </h2>
      <ul display="flex" flexDirection="column" mb={5} ml={0}>
        {data.guestServices.nodes.map(service => (
          <GuestService key={service.id} {...service} />
        ))}
      </ul>
      <ContactForm />
    </div>
  </>
)

export const pageQuery = graphql`
  query {
    header: file(relativePath: { eq: "guest-services.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    guestServices: allWordpressWpGuestServices {
      nodes {
        ...GuestService
      }
    }
  }
`
export default GuestServices
