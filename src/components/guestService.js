import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Box from 'components/box'

const GuestService = ({ featured_media, content, title }) => (
  <Box as="li" display="flex" listStyle="none" mb={3}>
    <Box display="inline-block" verticalAlign="top">
      <Img fixed={featured_media.localFile.childImageSharp.fixed} />
    </Box>
    <Box display="inline-block" verticalAlign="top" ml={3}>
      <Box as="h4" variant="bold" mb={1} fontSize={5}>
        {title}
      </Box>
      <Box
        color="textSecondary"
        fontWeight="medium"
        mb={3}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Box>
  </Box>
)

export const query = graphql`
  fragment GuestService on wordpress__wp_guest_services {
    featured_media {
      localFile {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
    content
    title
    id
  }
`

GuestService.propTypes = {
  content: PropTypes.string.isRequired,
  featured_media: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

export default GuestService
