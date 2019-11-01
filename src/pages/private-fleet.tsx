import React from 'react'
import { graphql } from 'gatsby'

import PageContent from 'components/pageContent'
import Contact from 'components/contact'

const PrivateFleet = ({ data: { page } }) => (
  <>
    <PageContent page={page} />
    <Contact />
  </>
)

export const query = graphql`
  query {
    page: wordpressWpPageContent(slug: { eq: "private-fleet" }) {
      ...Page
    }
  }
`

export default PrivateFleet
