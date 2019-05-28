import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import React from 'react'

import PostCard from 'components/postCard'
import Flex from 'elements/flex'
import Text from 'elements/text'
import { rhythm, scale } from 'theme/typography'
import SwirlBackground from 'components/swirlBackground'
import palette from 'theme/palette'
import ConciergeServices from 'components/conciergeServices'
import Contact from 'components/contact'
import Rentals from 'components/rentals'
import Testimonial from 'components/testimonial'
import SEO from 'components/seo'
import CheckAvailability from 'components/checkAvailability'

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-bottom: 100px;
  text-align: center;
`

const About = styled.span`
  position: relative;
  justify-self: flex-start;
  margin-top: 150px;
  margin-bottom: 50px;
  color: ${palette.text.secondary};
  letter-spacing: 0.35em;
  text-transform: uppercase;
`

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  padding: 10% 0 10% 10%;
  text-align: left;
`

const WelcomeAboard = styled.h3`
  ${scale(0.8)}
  max-width: 250px;
  line-height: 60px;
  color: black;
`

const WelcomeAboardBorder = styled.div`
  width: 15%;
  margin-top: 0;
  margin-bottom: 10px;
  padding-top: 0;
  text-align: left;
  vertical-align: top;
  border-top: 2px solid rgba(0, 0, 0, 1);
`

const WelcomeAboardCopy = styled.p`
  font-size: 14px;
`

const Author = styled.div`
  padding-top: 20px;
  font-size: 15px;
`

const WelcomeImageContainer = styled.div`
  width: 300px;
  height: 400px;
  padding: 8px;
  background-color: ${palette.background.light};
`
const WelcomeImage = styled(Img)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const WelcomeContainer = styled.div`
  display: flex;
  flex-basis: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-height: 40%;
  padding: 10%;
  overflow: hidden;
`

const FirstSection = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  &::before,
  &::after {
    filter: brightness(0.5);
  }
`

const Message = styled.span`
  ${scale(1 / 4)}
  color: white;
  margin-bottom: ${rhythm(1.5)};
  font-weight: 600;
  position: relative;
  letter-spacing: 0.06em;
  z-index: 2;
`

const WelcomeMessage = styled(Message)`
  ${scale(1 / 4)}
  letter-spacing: 0.18em;
  margin-bottom: ${rhythm(2)};
  text-transform: uppercase;
  font-weight: bold;
  font-style: bold;
`

const Header = styled.h1`
  position: relative;
  z-index: 2;
  margin-bottom: ${rhythm(1.5)};
  color: white;
  font-weight: 400;
  text-transform: uppercase;
`

const HeaderOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin: auto;
  background: rgba(0, 0, 0, 0.3);
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
      testimonials: allTestimonialsJson {
        nodes {
          ...Testimonial
        }
      }
      blogPosts: allMarkdownRemark(
        limit: 3
        sort: { fields: [fields___date], order: DESC }
      ) {
        edges {
          node {
            ...PostCard
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <FirstSection
        Tag="section"
        fadeIn
        fluid={data.home.childImageSharp.fluid}
        backgroundColor={palette.primary}
      >
        <HeaderOverlay />
        <WelcomeMessage>welcome to</WelcomeMessage>
        <Header>muskoka district</Header>
        <Message>Come unwind with us</Message>
      </FirstSection>
      <CheckAvailability />
      <Hero>
        <About>about us</About>
        <WelcomeContainer>
          <WelcomeImageContainer>
            <WelcomeImage fluid={data.welcome.childImageSharp.fluid} />
          </WelcomeImageContainer>
          <Welcome>
            <WelcomeAboard>
              <WelcomeAboardBorder />
              <span>Welcome Aboard!</span>
            </WelcomeAboard>
            <WelcomeAboardCopy>
              Nisi laborum dolore minim qui laborum. Ut incididunt qui ex amet
              aute cupidatat. Ullamco ex nostrud non aliqua eu adipisicing
              proident fugiat non pariatur do aliqua enim. Velit cupidatat id
              veniam labore voluptate ex nulla ut sit anim. Elit mollit est est
              ex ad ut id do ut ea ex.
            </WelcomeAboardCopy>
            <Author>
              <strong>Ross Halloran -</strong> Founder Muskoka District Rentals
            </Author>
          </Welcome>
        </WelcomeContainer>
      </Hero>
      <Rentals />
      <ConciergeServices />
      <SwirlBackground>
        <Testimonial {...data.testimonials.nodes[0]} />
        <Flex
          flexDirection="column"
          textAlign="center"
          alignItems="center"
          px={5}
          mb={6}
        >
          <Text
            letterSpacing="0.6em"
            textTransform="uppercase"
            fontWeight="bold"
            mb={4}
            color="text.secondary"
          >
            explore
          </Text>
          <Text as="h3" fontSize={0} mb={5}>
            Latest from our blog
          </Text>
          {data.blogPosts.edges.map(edge => (
            <PostCard key={edge.node.id} {...edge.node} />
          ))}
        </Flex>
      </SwirlBackground>
      <Contact />
    </>
  )
}

export default IndexPage
