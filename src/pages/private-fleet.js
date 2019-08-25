import { graphql } from 'gatsby'
import React from 'react'

import PageContent from 'components/pageContent'
import Contact from 'components/contact'
import Layout from 'components/layout'
import ContactForm from 'components/contactForm'
import PageImage from 'components/pageImage'
import SEO from 'components/seo'

const PrivateFleet = ({
  data: {
    page: { title, content, featured_media },
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
    <Contact />
  </Layout>
)

export const query = graphql`
  query {
    page: wordpressWpPageContent(slug: { eq: "private-fleet" }) {
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

export default PrivateFleet
