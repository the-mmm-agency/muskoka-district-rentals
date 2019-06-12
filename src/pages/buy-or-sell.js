import { graphql } from 'gatsby'
import React from 'react'
import css from '@styled-system/css'

import ContactForm from 'components/contactForm'
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
    <div
      css={css({
        px: [3, 6],
        py: 5,
        h6: {
          px: 0,
          mb: 2,
        },
        p: {
          mb: 0,
        },
      })}
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <ContactForm />
    </div>
  </>
)

export const pageQuery = graphql`
  query {
    page: wordpressPage(slug: { eq: "buy-or-sell-cottages" }) {
      title
      content
      featured_media {
        localFile {
          childImageSharp {
            fluid(quality: 100, maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default BuyOrSell
