import { graphql } from 'gatsby'
import { css } from '@xstyled/emotion'
import React from 'react'

import ContactForm from 'components/contactForm'
import PageContent from 'components/pageContent'
import PageImage from 'components/pageImage'
import Layout from 'components/layout'
import SEO from 'components/seo'

const GuestServices = ({
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
      <div
        css={css`
          h2 {
            margin-bottom: 2;
          }
          .wp-block-media-text {
            display: flex;
            .wp-block-media-text_media {
              width: 30%;
            }
          }
          h6 {
            margin-bottom: 4;
          }
        `}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <ContactForm />
    </PageContent>
  </Layout>
)

export const query = graphql`
  query {
    page: wordpressWpPageContent(slug: { eq: "guest-services" }) {
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
export default GuestServices
