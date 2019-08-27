import { graphql } from 'gatsby'
import { css } from '@xstyled/emotion'
import React from 'react'

import Box from 'components/box'
import Contact from 'components/contact'
import Layout from 'components/layout'
import Heading from 'components/heading'
import Text from 'components/text'
import PageImage from 'components/pageImage'
import SwirlBackground from 'components/swirlBackground'
import HorizontalScroll from 'components/horizontalScroll'
import Testimonial from 'components/testimonial'
import OurTeam from 'components/ourTeam'
import SEO from 'components/seo'

const AboutUs = ({ data: { image, testimonials } }) => (
  <Layout>
    <SEO title="About Us" />
    <PageImage fluid={image.childImageSharp.fluid}>
      <span
        css={css`
          position: relative;
          margin-bottom: 2;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        `}
      >
        about us
      </span>
      <Heading
        mb={1}
        position="relative"
        zIndex={2}
        fontWeight={500}
        maxWidth={500}
        lineHeight="70px"
      >
        Come escape the mundane
      </Heading>
    </PageImage>
    <Box
      as="section"
      px={{ xs: 3, sm: 6 }}
      py={{ xs: 2, sm: 3 }}
      textAlign="center"
    >
      <Heading as="h2" fontSize={0} mb={0} mt={{ xs: 0, md: 3, lg: 5 }}>
        History
      </Heading>
      <Text as="p" padding={{ xs: 2, sm: 3 }}>
        Muskoka District Rentals (MDR) provides rental agent services for
        cottage owners seeking a trusted partner to safely manage renting their
        property. For guests, we offer premium cottage rental experiences.Our
        dedicated staff has extensive experience to ensure exceptional service
        and results.
      </Text>
    </Box>
    <OurTeam />
    <Contact />
    <SwirlBackground css={{ minHeight: 0 }}>
      <HorizontalScroll>
        {testimonials.nodes.map(t => (
          <Testimonial {...t} key={t.author} />
        ))}
      </HorizontalScroll>
    </SwirlBackground>
  </Layout>
)

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
`
export default AboutUs
