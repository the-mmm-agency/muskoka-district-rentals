import { graphql } from 'gatsby'
import React from 'react'

import Box from 'components/box'
import Flex from 'components/flex'
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
    <Flex
      px={{ xs: 3, sm: 4, md: 5, lg: 6 }}
      py={{ xs: 0, sm: 1, md: 2, lg: 3 }}
      flexDirection="column"
    >
      <Box
        css={{
          ul: {
            marginLeft: '1.2rem',
          },
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <ContactForm />
    </Flex>
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
