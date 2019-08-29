import React from 'react'
import { graphql } from 'gatsby'

import PageContent from 'components/pageContent'

const BuyOrSell = ({ data: { page } }) => <PageContent contact page={page} />

export const query = graphql`
  query {
    page: wordpressWpPageContent(slug: { eq: "buy-or-sell" }) {
      ...Page
    }
  }
`

export default BuyOrSell
