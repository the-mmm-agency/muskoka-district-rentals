import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

import { scale, rhythm } from 'utils/typography'
import palette from 'theme/palette'
import Contact from 'components/contact'
import Rentals from 'components/rentals'
import Layout from 'components/layout'
import SEO from 'components/seo'

const Hero = styled.section`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  text-align: center;
`

const About = styled.span`
  justify-self: flex-start;
  color: ${palette.text.secondary};
  position: relative;
  letter-spacing: 0.4em;
  text-transform: uppercase;
`

const Welcome = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: center;
  padding: 10%;
  height: 100%;
  width: 50%;
`

const WelcomeAboard = styled.h3`
  ${scale(1.2)}
`

const WelcomeImageContainer = styled.div`
  background-color: ${palette.background.light};
  padding: 8px;
  height: 500px;
  width: 400px;
`
const WelcomeImage = styled(Img)`
  overflow: hidden;
  height: 100%;
  width: 100%;
`

const WelcomeContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-basis: 50%;
  max-height: 40%;
  overflow: hidden;
  padding: 10%;
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
  ${scale(1 / 3)}
  color: #ffffff;
  margin-bottom: ${rhythm(2)};
  font-weight: 600;
`

const WelcomeMessage = styled(Message)`
  letter-spacing: 0.3em;
  text-transform: uppercase;
`

const Header = styled.h1`
  color: #ffffff;
  margin-bottom: ${rhythm(2)};
  text-transform: uppercase;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      home: file(relativePath: { eq: "home.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      welcome: file(relativePath: { eq: "welcome.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <FirstSection
        Tag="section"
        fluid={data.home.childImageSharp.fluid}
        backgroundColor={palette.primary}
      >
        <WelcomeMessage>welcome to</WelcomeMessage>
        <Header>muskoka district</Header>
        <Message>Come unwind with us</Message>
      </FirstSection>
      <Hero>
        <About>about us</About>
        <WelcomeContainer>
          <WelcomeImageContainer>
            <WelcomeImage fluid={data.welcome.childImageSharp.fluid} />
          </WelcomeImageContainer>
          <Welcome>
            <WelcomeAboard>Welcome Aboard!</WelcomeAboard>
            <p>
              Nisi laborum dolore minim qui laborum. Ut incididunt qui ex amet
              aute cupidatat. Ullamco ex nostrud non aliqua eu adipisicing
              proident fugiat non pariatur do aliqua enim. Velit cupidatat id
              veniam labore voluptate ex nulla ut sit anim. Elit mollit est est
              ex ad ut id do ut ea ex.
            </p>
          </Welcome>
        </WelcomeContainer>
      </Hero>
      <Rentals />
      <Contact />
    </Layout>
  )
}

export default IndexPage
