import React from 'react'
import { graphql } from 'gatsby'

import PageContent from 'components/pageContent'

const RentYourCottage = ({ data: { page } }) => <PageContent page={page} />

export const query = graphql`
  query {
    page: wordpressWpPageContent(slug: { eq: "rent-your-cottage" }) {
      ...Page
    }
  }
`

export default RentYourCottage
