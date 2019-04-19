import React from 'react'
import styled from 'styled-components'

import Layout from 'components/layout'
import SEO from 'components/seo'
import palette from 'theme/palette'
import { rhythm } from 'utils/typography'

const Wrapper = styled.div`
  padding: ${rhythm(1)} 20%;
`

const SectionWrapper = styled.div`
  display: flex;
  flex-basis: calc(100% / 3);
  margin-top: ${rhythm(4)};
`

const Section = styled.div`
  &:last-child {
    border-right: none;
  }
  border-right: 1px solid ${palette.text.primary};
  display: flex;
  flex-direction: column;
  margin-right: ${rhythm(1)};
`

const RentYourCottage = () => (
  <Layout>
    <SEO
      title="Rent Your Cottage"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <Wrapper>
      <h1>Rent Your cottage</h1>
      <p>
        Looking to offset costs of your cottage or vacation property? MDR offers
        a safe turn-key, rental solution
      </p>
      <SectionWrapper>
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
      </SectionWrapper>
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
    </Wrapper>
  </Layout>
)

export default RentYourCottage
