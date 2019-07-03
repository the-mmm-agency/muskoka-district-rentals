import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { css } from '@xstyled/emotion'
import { graphql } from 'gatsby'

import Box from 'components/box'
import Heading from 'components/heading'

const GuestService = ({ featured_media, content, title }) => (
  <li
    css={css`
      margin-bottom: 3;
      list-style: none;
      div {
        display: inline-block;
        vertical-align: top;
        &:last-of-type {
          margin-left: 3;
        }
      }
    `}
  >
    <div>
      <Img fixed={featured_media.localFile.childImageSharp.fixed} />
    </div>
    <div>
      <Heading as="h5" mb={1}>
        {title}
      </Heading>
      <Box
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
