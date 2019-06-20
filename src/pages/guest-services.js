import { graphql } from 'gatsby'
import { css } from '@xstyled/emotion'
import React from 'react'

import Box from 'components/box'
import ContactForm from 'components/contactForm'
import PageImage from 'components/pageImage'
import GuestService from 'components/guestService'
import SEO from 'components/seo'

const GuestServices = ({
  data: {
    page: { title, content, featured_media },
    guestServices,
  },
}) => (
  <>
    <SEO title={title} />
    <PageImage
      fluid={featured_media.localFile.childImageSharp.fluid}
      Tag="section"
    />
    <Box py={[4, 5]} px={[3, 5]}>
      <div
        css={css`
          h2 {
            margin-bottom: 3;
          }
          h6 {
            margin-bottom: 4;
          }
        `}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Box as="ul" display="flex" flexDirection="column" mb={5} ml={0}>
        {guestServices.nodes.map(service => (
          <GuestService key={service.id} {...service} />
        ))}
      </Box>
      <ContactForm />
    </Box>
  </>
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
