import { graphql } from 'gatsby';
import React from 'react';

import Contact from 'components/contact';
import HorizontalScroll from 'components/horizontalScroll';
import OurTeam from 'components/ourTeam';
import PageImage from 'components/pageImage';
import SEO from 'components/seo';
import SwirlBackground from 'components/swirlBackground';
import Testimonial from 'components/testimonial';
import Flex from 'elements/flex';
import Heading from 'elements/heading';
import Text from 'elements/text';

const AboutUs = ({ data: { image, testimonials } }) => (
  <>
    <SEO title="About Us" />
    <PageImage fluid={image.childImageSharp.fluid}>
      <Heading
        as="h1"
        mb={1}
        position="relative"
        zIndex={2}
        fontWeight={500}
        maxWidth={500}
        lineHeight="70px"
      >
        About Us
      </Heading>
    </PageImage>
    <Flex
      as="section"
      px={{ xs: 3, sm: 6 }}
      py={{ xs: 2, sm: 3, md: 4, lg: 5 }}
      textAlign="center"
      alignItems="center"
      flexDirection="column"
    >
      <Heading as="h2" fontSize={0} mb={0} mt={{ xs: 0, md: 3, lg: 5 }}>
        History
      </Heading>
      <Text
        as="p"
        maxWidth={{ xs: 0.8, sm: 0.7, md: 0.6, lg: 0.5 }}
        padding={{ xs: 2, sm: 3 }}
      >
        Muskoka District Rentals (MDR) provides rental agent services for
        cottage owners seeking a trusted partner to safely manage renting their
        property. For guests, we offer premium cottage rental experiences.Our
        dedicated staff has extensive experience to ensure exceptional service
        and results.
      </Text>
    </Flex>
    <OurTeam />
    <Contact />
    <SwirlBackground css={{ minHeight: 0 }}>
      <HorizontalScroll>
        {testimonials.nodes.map(t => (
          <Testimonial {...t} key={t.author} />
        ))}
      </HorizontalScroll>
    </SwirlBackground>
  </>
);

export const query = graphql`
  query {
    testimonials: allTestimonialsJson {
      nodes {
        ...Testimonial
      }
    }
    image: file(relativePath: { eq: "home.jpg" }) {
      ...PageImage
    }
  }
`;
export default AboutUs;
