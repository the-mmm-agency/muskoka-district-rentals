import { graphql } from 'gatsby';
import React from 'react';

import ContactSection from 'components/contact';
import PageContent from 'components/pageContent';
import PageImage from 'components/pageImage';
import SEO from 'components/seo';

const Contact = ({ data: { image } }) => (
  <>
    <SEO title="Contact Us" />
    <PageImage Tag="section" fluid={image.childImageSharp.fluid} />
    <PageContent contact />
    <ContactSection />
  </>
);

export const query = graphql`
  query {
    image: file(relativePath: { eq: "home.jpg" }) {
      ...PageImage
    }
  }
`;

export default Contact;
