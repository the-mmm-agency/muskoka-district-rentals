import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'

import Flex from 'elements/flex'
import ContactForm from 'components/contactForm'
import PageImage from 'components/pageImage'
import SEO from 'components/seo'
import palette from 'theme/palette'
import { rhythm, scale } from 'theme/typography'

const Wrapper = styled.div`
  padding: ${rhythm(4)} 15%;
  h6 {
    ${scale(1 / 4)};
    margin-bottom: ${rhythm(1 / 3)};
  }
  span {
    ${scale(1 / 12)};
    color: ${palette.text.secondary};
    font-weight: 700;
    max-width: 20vw;
  }
  p {
    color: ${palette.text.secondary};
  }
`

const Section = styled.div`
  &:last-child {
    border-right: none;
  }
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  margin-right: ${rhythm(1)};
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
      <Wrapper>
        <h1>Rent Your cottage</h1>
        <span>
          Looking to offset costs of your cottage or vacation property? MDR
          offers a safe turn-key, rental solution
        </span>
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
        <h6>Owner Feedback:</h6>
        <p>
          Et nostrud nostrud anim occaecat cupidatat irure anim dolor quis ut
          voluptate ex cillum. Lorem quis aliqua magna tempor qui amet eu velit.
          Aute do deserunt id irure voluptate aute id commodo incididunt officia
          anim.
        </p>
        <h6>Guest Feedback:</h6>
        <p>
          Et nostrud nostrud anim occaecat cupidatat irure anim dolor quis ut
          voluptate ex cillum. Lorem quis aliqua magna tempor qui amet eu velit.
          Aute do deserunt id irure voluptate aute id commodo incididunt officia
          anim.
        </p>
        <ContactForm />
      </Wrapper>
    </>
  )
}

export default RentYourCottage
