import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import React from 'react'
import { themeGet } from 'styled-system'

import Box from 'elements/box'
import Flex from 'elements/flex'
import Text from 'elements/text'
import ContactForm from 'components/contactForm'
import PageImage from 'components/pageImage'
import SEO from 'components/seo'

const Section = styled.div`
  &:last-child {
    border-right: none;
  }
  display: flex;
  flex-direction: column;
  margin-right: ${themeGet('space.3')};
  padding: 0 ${themeGet('space.2')};
  border-right: 1px solid ${themeGet('color.text.light')};
  h6 {
    margin-bottom: ${themeGet('space.2')};
  }
`

const RentYourCottage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxHeight: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO
        title="Rent Your Cottage"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <PageImage fluid={data.file.childImageSharp.fluid} Tag="section" />
      <Box px={[3, 6]} py={5}>
        <h1>Rent Your cottage</h1>
        <Text fontWeight="bold" maxWidth="20vw">
          Looking to offset costs of your cottage or vacation property? MDR
          offers a safe turn-key, rental solution
        </Text>
        <Flex flexBasis="calc(100% / 3)" mt={4} mb={2}>
          <Section>
            <h6>Cottage Marketing</h6>
            <p>
              Labore aliquip ipsum quis quis minim esse occaecat occaecat duis.
              Anim consequat ea do nulla dolor ea dolor nulla id. Minim Lorem ea
            </p>
            <h6>Accounting & Reporting</h6>
            <p>
              Labore aliquip ipsum quis quis minim esse occaecat occaecat duis.
              Anim consequat ea do nulla dolor ea dolor nulla id. Minim Lorem ea
            </p>
          </Section>
          <Section>
            <h6>Guest Screening</h6>
            <p>
              Labore aliquip ipsum quis quis minim esse occaecat occaecat duis.
              Anim consequat ea do nulla dolor ea dolor nulla id. Minim Lorem ea
            </p>
            <h6>Property Maintenance & Cleaning Services</h6>
            <p>
              Labore aliquip ipsum quis quis minim esse occaecat occaecat duis.
              Anim consequat ea do nulla dolor ea dolor nulla id. Minim Lorem ea
            </p>
          </Section>
          <Section>
            <h6>Rental Administration</h6>
            <p>
              Labore aliquip ipsum quis quis minim esse occaecat occaecat duis.
              Anim consequat ea do nulla dolor ea dolor nulla id. Minim Lorem ea
            </p>
            <h6>Guest Concierge</h6>
            <p>
              Labore aliquip ipsum quis quis minim esse occaecat occaecat duis.
              Anim consequat ea do nulla dolor ea dolor nulla id. Minim Lorem ea
            </p>
          </Section>
        </Flex>
        <Text as="h6" mb={2}>
          Owner Feedback:
        </Text>
        <p>
          Et nostrud nostrud anim occaecat cupidatat irure anim dolor quis ut
          voluptate ex cillum. Lorem quis aliqua magna tempor qui amet eu velit.
          Aute do deserunt id irure voluptate aute id commodo incididunt officia
          anim.
        </p>
        <Text as="h6" mb={2}>
          Guest Feedback:
        </Text>
        <p>
          Et nostrud nostrud anim occaecat cupidatat irure anim dolor quis ut
          voluptate ex cillum. Lorem quis aliqua magna tempor qui amet eu velit.
          Aute do deserunt id irure voluptate aute id commodo incididunt officia
          anim.
        </p>
        <ContactForm />
      </Box>
    </>
  )
}

export default RentYourCottage
