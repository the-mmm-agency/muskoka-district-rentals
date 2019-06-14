import { graphql } from 'gatsby'
import css from '@styled-system/css'
import React from 'react'

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
    <div py={[4, 5]} px={[3, 6]}>
      <div
        css={css({
          h2: {
            mb: 3,
          },
          h6: {
            mb: 4,
          },
        })}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <ul display="flex" flexDirection="column" mb={5} ml={0}>
        {guestServices.nodes.map(service => (
          <GuestService key={service.id} {...service} />
        ))}
      </ul>
      <ContactForm />
    </div>
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
