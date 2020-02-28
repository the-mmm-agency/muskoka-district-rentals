import { graphql } from 'gatsby'
import React from 'react'

import { HeaderImage } from './index'

import Contact from 'components/contact'
import HorizontalScroll from 'components/horizontalScroll'
import { Logo } from 'components/layout/footer/footer.css'
import OurTeam from 'components/ourTeam'
import SEO from 'components/seo'
import SwirlBackground from 'components/swirlBackground'
import Testimonial from 'components/testimonial'
import Flex from 'elements/flex'
import Heading from 'elements/heading'
import Text from 'elements/text'

const AboutUs = ({ data: { testimonials, logoImg, headerImg } }) => (
  <>
    <SEO title="About Us" />
    <HeaderImage Tag="section" fadeIn fluid={headerImg?.childImageSharp?.fluid}>
      <span>welcome to</span>
      <Logo
        sizes={{ ...logoImg?.childImageSharp?.fluid, aspectRatio: 15 / 4 }}
      />
    </HeaderImage>
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
  query aboutUsPage {
    testimonials: allTestimonialsJson {
      nodes {
        ...Testimonial
      }
    }
    headerImg: file(relativePath: { eq: "home.jpg" }) {
      ...PageImage
    }
    logoImg: file(relativePath: { eq: "logo-white.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
export default AboutUs;
