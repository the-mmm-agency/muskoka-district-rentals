import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

import { scale, rhythm } from 'theme/typography'
import palette from 'theme/palette'
import Layout from 'components/layout'
import SEO from 'components/seo'

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
  color: #ffffff;
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
  ${scale(2.5 / 3)}
  color: #ffffff;
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
    <Layout>
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
    </Layout>
  )
}

export default AboutUs
