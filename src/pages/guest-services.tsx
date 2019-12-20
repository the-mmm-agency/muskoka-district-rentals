import styled from '@xstyled/emotion';
import { graphql } from 'gatsby';
import React from 'react';

import PageContent from 'components/pageContent';

const Content = styled(PageContent)`
  h2 {
    margin-bottom: 2;
  }
  .wp-block-media-text {
    display: flex;
    margin-bottom: 3;
    .wp-block-media-text__content {
      margin-top: 1em;
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
      img {
        width: 100%;
      }
      display: flex;
      min-width: 4em;
      max-width: 8em;
      flex-grow: 1;
      align-items: center;
      margin-inline-start: 0;
      margin-inline-end: 0;
      margin-right: 4;
      margin-bottom: 4;
    }
  }
`;
const GuestServices = ({ data: { page } }) => <Content contact page={page} />;

export const query = graphql`
  query {
    page: wordpressWpPageContent(slug: { eq: "guest-services" }) {
      ...Page
    }
  }
`;

export default GuestServices;
