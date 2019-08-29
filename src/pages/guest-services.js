import { css } from '@xstyled/emotion'
import { graphql } from 'gatsby'
import React from 'react'

import PageContent from 'components/pageContent'

const GuestServices = ({ data: { page } }) => (
  <PageContent
    css={css`
      h2 {
        margin-bottom: 2;
      }
      .wp-block-media-text {
        display: flex;
        margin-bottom: 3;
        white-space: nowrap;
        h5 {
          margin-bottom: 1;
        }
        .wp-block-media-text_media {
          width: 30%;
          margin-left: 3;
        }
      }
      h6 {
        margin-bottom: 4;
      }
    `}
    contact
    page={page}
  />
)

export const query = graphql`
  query {
    page: wordpressWpPageContent(slug: { eq: "guest-services" }) {
      ...Page
    }
  }
`

export default GuestServices
