import React from 'react'
import styled from 'styled-components'

import Layout from 'components/layout'
import SEO from 'components/seo'
import { rhythm } from 'utils/typography'

const Wrapper = styled.div`
  padding: ${rhythm(1)} 20%;
`

const GuestServices = () => (
  <Layout>
    <SEO title="Guest Services" />
    <Wrapper>
      <h1>Guest Services</h1>
      <h6>Reserve your vacation rental with MDR.</h6>
      <h6>Guest Pre-approval Registration</h6>
      <p>
        Veniam consectetur exercitation exercitation laboris fugiat irure in
        fugiat exercitation ullamco ad Lorem.
      </p>
      <h6>Vacation Property Searches</h6>
      <p>
        Veniam consectetur exercitation exercitation laboris fugiat irure in
        fugiat exercitation ullamco ad Lorem.
      </p>
      <h6>Guest Concierge</h6>
      <p>
        Veniam consectetur exercitation exercitation laboris fugiat irure in
        fugiat exercitation ullamco ad Lorem.
      </p>
      <h6>Travel Insurance</h6>
      <p>
        Veniam consectetur exercitation exercitation laboris fugiat irure in
        fugiat exercitation ullamco ad Lorem.
      </p>
    </Wrapper>
  </Layout>
)

export default GuestServices
