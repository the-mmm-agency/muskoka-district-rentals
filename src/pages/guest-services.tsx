import { css } from '@xstyled/emotion';
import { graphql } from 'gatsby';
import React from 'react';

import PageContent from 'components/pageContent';

const GuestServices = ({ data: { page } }) => (
  <PageContent
    css={css`
      h2 {
        margin-bottom: 2;
      }
      .wp-block-media-text {
        display: flex;
        margin-bottom: 3;
        .wp-block-media-text__content {
          h6 {
            margin-bottom: 1;
            font-size: 4;
            font-family: serif;
            white-space: nowrap;
          }
          p {
            max-width: 800px;
          }
        }
        .wp-block-media-text__media {
          display: flex;
          align-items: center;
          margin-inline-start: 0;
          margin-inline-end: 0;
          margin: 2 3 4 0;
        }
      }
    `}
    contact
    page={page}
  />
);

export const query = graphql`
  query {
    page: wordpressWpPageContent(slug: { eq: "guest-services" }) {
      ...Page
    }
  }
`;

export default GuestServices;
