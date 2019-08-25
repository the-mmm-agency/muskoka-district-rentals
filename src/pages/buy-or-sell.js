import { graphql } from 'gatsby'
import React from 'react'

import ContactForm from 'components/contactForm'
import PageContent from 'components/pageContent'
import Layout from 'components/layout'
import PageImage from 'components/pageImage'
import SEO from 'components/seo'

const BuyOrSell = ({
  data: {
    page: { title, featured_media, content },
  },
}) => (
  <Layout>
    <SEO title={title} />
    <PageImage
      fluid={featured_media.localFile.childImageSharp.fluid}
      Tag="section"
    />
    <PageContent>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <ContactForm />
    </PageContent>
  </Layout>
)

export const query = graphql`
  query {
    page: wordpressWpPageContent(slug: { eq: "buy-or-sell-cottages" }) {
      title
      content
      featured_media {
        localFile {
          ...PageImage
        }
      }
    }
  }
`

export default BuyOrSell
