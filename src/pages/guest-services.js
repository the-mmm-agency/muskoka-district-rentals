import { graphql } from 'gatsby'
import { css } from '@xstyled/emotion'
import React from 'react'

import Flex from 'components/flex'
import ContactForm from 'components/contactForm'
import PageContent from 'components/pageContent'
import PageImage from 'components/pageImage'
import Layout from 'components/layout'
import GuestService from 'components/guestService'
import SEO from 'components/seo'

const GuestServices = ({
  data: {
    page: { title, content, featured_media },
    guestServices,
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
          h6 {
            margin-bottom: 4;
          }
        `}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Flex as="ul" flexDirection="column" ml={0}>
        {guestServices.nodes.map(service => (
          <GuestService key={service.id} {...service} />
        ))}
      </Flex>
      <ContactForm />
    </PageContent>
  </Layout>
)

export const query = graphql`
  query {
    page: wordpressPage(slug: { eq: "guest-services" }) {
      title
      content
      featured_media {
        localFile {
          ...PageImage
        }
      }
    }
    guestServices: allWordpressWpGuestServices {
      nodes {
        ...GuestService
      }
    }
  }
`
export default GuestServices
