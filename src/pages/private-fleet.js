import { graphql } from 'gatsby'
import React from 'react'

import ContactForm from 'components/contactForm'
import PageImage from 'components/pageImage'
import SEO from 'components/seo'

const PrivateFleet = ({
  data: {
    page: { title, content, featured_media },
  },
}) => (
  <>
    <SEO title={title} />
    <PageImage
      fluid={featured_media.localFile.childImageSharp.fluid}
      Tag="section"
    />
    <div px={[3, 4, 5, 6]} py={[0, 1, 2, 3]}>
      <div
        css={{
          ul: {
            marginLeft: '1.2rem',
          },
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <ContactForm />
    </div>
  </>
)

export const query = graphql`
  query {
    page: wordpressPage(slug: { eq: "private-fleet" }) {
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
