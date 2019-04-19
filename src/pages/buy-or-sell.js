import React from 'react'
import styled from 'styled-components'

import Layout from 'components/layout'
import SEO from 'components/seo'
import { rhythm } from 'utils/typography'

const Wrapper = styled.div`
  padding: ${rhythm(1)} 20%;
`

const BuyOrSell = () => (
  <Layout>
    <SEO title="Buy or Sell Cottages" />
    <Wrapper>
      <h1>Buying orr selling a cottage property?</h1>
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

export default BuyOrSell
