import { graphql } from 'gatsby'
import React from 'react'

import PageContent from 'components/pageContent'
import ContactForm from 'components/contactForm'
import Layout from 'components/layout'
import PageImage from 'components/pageImage'
import SEO from 'components/seo'

const RentYourCottage = ({
  data: {
    page: { title, content, featured_media },
  },
}) => (
  <Layout>
    <SEO title={title} keywords={['gatsby', 'application', 'react']} />
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
    page: wordpressPage(slug: { eq: "rent-your-cottage" }) {
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

export default RentYourCottage
