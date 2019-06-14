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
    <div px={6} py={5}>
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
          childImageSharp {
            fluid(quality: 100, maxWidth: 4000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default PrivateFleet
