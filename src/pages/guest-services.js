import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Box from 'elements/box'
import Flex from 'elements/flex'
import Text from 'elements/text'
import ContactForm from 'components/contactForm'
import PageImage from 'components/pageImage'
import GuestService from 'components/guestService'
import SEO from 'components/seo'

const GuestServices = () => {
  const data = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "guest-services.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxHeight: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      guestServices: allGuestServicesJson {
        nodes {
          ...GuestService
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Guest Services" />
      <PageImage fluid={data.header.childImageSharp.fluid} Tag="section" />
      <Box py={5} px={6}>
        <Text as="h1" mb={3} fontSize={2}>
          Guest Services
        </Text>
        <Text as="h2" fontSize={5} ml={1}>
          Reserve your vacation with MDR.
        </Text>
        <Flex as="ul" flexDirection="column" mb={5}>
          {data.guestServices.nodes.map(service => (
            <GuestService key={service.id} {...service} />
          ))}
        </Flex>
        <ContactForm />
      </Box>
    </>
  )
}

export default GuestServices
