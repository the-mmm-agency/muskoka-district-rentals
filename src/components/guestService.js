import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const GuestService = ({ featured_media, content, title }) => (
  <li display="flex" mb={3}>
    <div display="inline-block" verticalAlign="top">
      <Img fixed={featured_media.localFile.childImageSharp.fixed} />
    </div>
    <div display="inline-block" verticalAlign="top" ml={3}>
      <h4 variant="bold" mb={1} fontSize={5}>
        {title}
      </h4>
      <div
        color="text.secondary"
        fontWeight="medium"
        mb={3}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  </li>
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
