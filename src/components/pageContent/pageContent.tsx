import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Image from 'components/pageImage'
import Flex from 'elements/flex'
import ContactForm from 'components/contactForm'
import SEO from 'components/seo'

const PageContent = ({
  children,
  contact,
  checkAvailability,
  page,
  ...props
}) => (
  <>
    {page && (
      <>
        <SEO title={page.title} />
        <Image
          fluid={page.featured_media.localFile.childImageSharp.fluid}
          Tag="section"
        />
      </>
    )}
    <Flex
      as="section"
      px={{ xs: 3, sm: 4, md: 4, xl: 5 }}
      py={{ xs: 2, sm: 3, md: 4, xl: 5 }}
      mb={{ xs: 2, md: 3, lg: 5 }}
      flexDirection="column"
      {...props}
    >
      {page && <div dangerouslySetInnerHTML={{ __html: page.content }} />}
      {children}
      {contact && <ContactForm />}
    </Flex>
  </>
)

export const query = graphql`
  fragment Page on wordpress__wp_page_content {
    title
    content
    featured_media {
      localFile {
        ...PageImage
      }
    }
  }
`

PageContent.defaultProps = {
  contact: false,
  checkAvailability: false,
}

PageContent.propTypes = {
  checkAvailability: PropTypes.bool,
  contact: PropTypes.bool,
  page: PropTypes.shape({
    content: PropTypes.string.isRequired,
    featured_media: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
  }),
}

export default PageContent
