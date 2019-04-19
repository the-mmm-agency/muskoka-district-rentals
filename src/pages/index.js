import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import palette from '../theme/palette'
import Layout from '../components/layout'
import Home from '../images/home.jpg'
import SEO from '../components/seo'

const About = styled.span`
  justify-self: flex-start;
  color: ${palette.text.secondary};
  position: relative;
  text-transform: uppercase;
`

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;
  height: 100%;
  width: 50%;
`

const WelcomeImage = styled(Img)`
  background-color: ${palette.background.light};
  padding: 8px;
  overflow: hidden;
  height: 500px;
  width: 300px;
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

const Hero = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  text-align: center;
`

const FirstSection = styled(Hero)`
  color: #ffffff;
  min-height: calc(100vh - 71px);
  max-height: calc(100vh - 71px);
  position: relative;
  &::after {
    content: '""';
    position: absolute;
    background-size: cover;
    background-image: url(${Home});
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    filter: grayscale(80%);
  }
`

const Header = styled.h1`
  text-transform: capitalize;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "welcome.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <FirstSection>
        <span>Welcome To</span>
        <Header>Musoka District</Header>
        <span>Come unwind with us</span>
      </FirstSection>
      <Hero>
        <About>about us</About>
        <WelcomeContainer>
          <WelcomeImage fluid={data.file.childImageSharp.fluid} />
          <Welcome>
            <h3>Welcome Aboard!</h3>
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
    </Layout>
  )
}

export default IndexPage
