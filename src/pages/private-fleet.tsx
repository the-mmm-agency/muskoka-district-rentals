import { graphql } from 'gatsby';
import React from 'react';

import Contact from 'components/contact';
import PageContent from 'components/pageContent';

const PrivateFleet = ({ data: { page } }) => (
  <>
    <PageContent page={page} />
    <Contact />
  </>
);

export const query = graphql`
  query {
    page: wordpressWpPageContent(slug: { eq: "private-fleet" }) {
      ...Page
    }
  }
`;

export default PrivateFleet;
