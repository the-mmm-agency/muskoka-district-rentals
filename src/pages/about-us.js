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
          letter-spacing: 0.1em;
          margin-bottom: 2;
          font-weight: 600;
          position: relative;
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
      py={{ xs: 4, sm: 5 }}
      textAlign="center"
    >
      <Heading as="h2" fontSize={0} mb={0} mt={{ xs: 0, md: 3, lg: 5 }}>
        History
      </Heading>
      <Text as="p" padding={{ xs: 3, sm: 4, md: 5, lg: 6 }}>
        Sed pellentesque pulvinar arcu ac congue. Sed sed est nec justo maximus
        blandit. Curabitur lacinia, eros sit amet max imus suscipit, magna
        sapien venenatis eros, et gravida urna massa ut lectus. Quisque lacinia
        lacinia viverra. Nullam nec est et lorem sodales ornare a in sapien. In
        et urna maximus, consectetur ligula in, gravida erat. Nullam dignissim
        hendr erit auctor. Sed varius, dolor vitae iaculis condimentum, massa
        nisl cursus sapien, gravida ultrices nisi dolor non erat. pi llentesque
        sodales sed nisl eget dignissim. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Donec consequat
        tortor vitae nisl bibendum, vel eleifend dui feugiat. Curabitur
        pharetra, risus eget gravida lobortis, ipsum lorem pretium sem, sit amet
        scelerisque dui neque et nisl. Sed vitae.
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
