import { graphql } from 'gatsby'
import React from 'react'

import ContactForm from 'components/contactForm'
import Box from 'components/box'
import PageImage from 'components/pageImage'
import SEO from 'components/seo'

const BuyOrSell = ({
  data: {
    page: { title, featured_media, content },
  },
}) => (
  <>
    <SEO title={title} />
    <PageImage
      fluid={featured_media.localFile.childImageSharp.fluid}
      Tag="section"
    />
    <Box px={[3, 6]} py={5}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <ContactForm />
    </Box>
  </>
)

export const query = graphql`
  query {
    page: wordpressPage(slug: { eq: "buy-or-sell-cottages" }) {
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
