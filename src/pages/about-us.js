import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

import { scale, rhythm } from 'theme/typography'
import Contact from 'components/contact'
import OurTeam from 'components/ourTeam'
import palette from 'theme/palette'
import SEO from 'components/seo'

const Section = styled.section`
  h2 {
    ${scale(1)};
    margin-bottom: ${rhythm(2)};
  }
  padding: 10% 20%;
  text-align: center;
`

const FirstSection = styled(BackgroundImage)`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  text-align: center;
  &::before,
  &::after {
    filter: brightness(0.5);
  }
`

const Message = styled.span`
  ${scale(0.3 / 3)}
  color: white;
  margin-bottom: ${rhythm(1.5)};
  font-weight: 500;
  position: relative;
  z-index: 2;
`

const WelcomeMessage = styled(Message)`
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 600;
`

const Header = styled.h1`
  ${scale(1)}
  color: white;
  margin-bottom: ${rhythm(1.5)};
  position: relative;
  z-index: 2;
  font-weight: 500;
  max-width: 500px;
  line-height: 70px;
`

const HeaderOverlay = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.3);
`

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "contact-us.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="About Us" keywords={[`gatsby`, `application`, `react`]} />
      <FirstSection
        Tag="section"
        fadeIn
        fluid={data.about.childImageSharp.fluid}
        backgroundColor={palette.primary}
      >
        <HeaderOverlay />
        <WelcomeMessage>about us</WelcomeMessage>
        <Header>Come escape the mundane</Header>
      </FirstSection>
      <Section>
        <h2>History</h2>
        <p>
          Sed pellentesque pulvinar arcu ac congue. Sed sed est nec justo
          maximus blandit. Curabitur lacinia, eros sit amet max imus suscipit,
          magna sapien venenatis eros, et gravida urna massa ut lectus. Quisque
          lacinia lacinia viverra. Nullam nec est et lorem sodales ornare a in
          sapien. In et urna maximus, consectetur ligula in, gravida erat.
          Nullam dignissim hendr erit auctor. Sed varius, dolor vitae iaculis
          condimentum, massa nisl cursus sapien, gravida ultrices nisi dolor non
          erat. pi llentesque sodales sed nisl eget dignissim. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Donec consequat tortor vitae nisl bibendum, vel
          eleifend dui feugiat. Curabitur pharetra, risus eget gravida lobortis,
          ipsum lorem pretium sem, sit amet scelerisque dui neque et nisl. Sed
          vitae.
        </p>
      </Section>
      <OurTeam />
      <Contact />
    </>
  )
}

export default AboutUs
