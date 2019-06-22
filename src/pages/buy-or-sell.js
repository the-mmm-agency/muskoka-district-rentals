import { graphql } from 'gatsby'
import React from 'react'

import ContactForm from 'components/contactForm'
import Flex from 'components/flex'
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
    <Flex flexDirection="column" px={{ xs: 3, sm: 6 }} py={5}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <ContactForm />
    </Flex>
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
