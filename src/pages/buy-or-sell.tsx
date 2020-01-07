import { graphql } from 'gatsby';
import React from 'react';

import PageContent from 'components/pageContent';

const BuyOrSell = ({ data: { page } }) => <PageContent contact page={page} />;

export const query = graphql`
  query BuyOrSellPage {
    page: wordpressWpPageContent(slug: { eq: "buy-or-sell-cottages" }) {
      ...Page
    }
  }
`;

export default BuyOrSell;
