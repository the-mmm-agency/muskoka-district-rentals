import { graphql } from 'gatsby'
import css from '@styled-system/css'
import React from 'react'

import Contact from 'components/contact'
import PageImage from 'components/pageImage'
import OurTeam from 'components/ourTeam'
import SEO from 'components/seo'

const AboutUs = ({ data: { image } }) => (
  <>
    <SEO title="About Us" keywords={[`gatsby`, `application`, `react`]} />
    <PageImage Tag="section" fadeIn fluid={image.childImageSharp.fluid}>
      <span
        css={css({
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontWeight: 600,
          mb: 2,
          zIndex: 2,
          position: 'relative',
        })}
      >
        about us
      </span>
      <h1
        mb={1}
        position="relative"
        zIndex={2}
        fontWeight={500}
        maxWidth={500}
        lineHeight="70px"
      >
        Come escape the mundane
      </h1>
    </PageImage>
    <section px={[3, 6]} py={[4, 5]} textAlign="center">
      <h2 fontSize={0} mb={2}>
        History
      </h2>
      <p>
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
      </p>
    </section>
    <OurTeam />
    <Contact />
  </>
)

export const query = graphql`
  query {
    image: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default AboutUs
