import styled from '@xstyled/emotion'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import ChatBot from 'components/chatbot'
import CheckAvailability from 'components/checkAvailability'
import ConciergeServices from 'components/conciergeServices'
import Contact from 'components/contact'
import HorizontalScroll from 'components/horizontalScroll'
import PageImage from 'components/pageImage'
import Rentals from 'components/rentals'
import SEO from 'components/seo'
import SwirlBackground from 'components/swirlBackground'
import Testimonial from 'components/testimonial'
import Box from 'elements/box'
import Flex from 'elements/flex'
import Text from 'elements/text'

export const HeaderImage = styled(PageImage)`
  min-height: 35rem;
  z-index: -1;
  display: flex;
  span {
    font-weight: bold;
    letter-spacing: 0.35em;
    text-transform: uppercase;
  }
`;

export const Logo = styled(Img)`
  width: 28rem;
`;

const VerticalLine = styled.div`
  width: 70px;
  margin-bottom: 4;
  vertical-align: top;
  border-top: 2.5px solid black;
`;

const IndexPage = ({
  data: { testimonials, headerImg, aboutImg, logoImg },
}) => (
  <>
    <SEO title="Home" />
    <HeaderImage Tag="section" fadeIn fluid={headerImg?.childImageSharp?.fluid}>
      <span>welcome to</span>
      <Logo
        sizes={{ ...logoImg?.childImageSharp?.fluid, aspectRatio: 15 / 4 }}
      />
    </HeaderImage>
    <CheckAvailability />
    <Flex mt={5} css={{ '& > *': { width: '100%' } }} width="100%">
      <Rentals />
    </Flex>
    <Flex
      alignItems="center"
      as="section"
      px={{ xs: 3, sm: 4, md: 4, xl: 5 }}
      py={{ xs: 2, sm: 3, md: 4, xl: 5 }}
      mb={{ xs: 2, md: 3, lg: 5 }}
      flexDirection="column"
      textAlign="center"
    >
      <ChatBot />
      <Flex
        flexBasis={{ xs: '100%', lg: '50%' }}
        flexDirection={{ xs: 'column', lg: 'row' }}
        alignItems="center"
        justifyContent="center"
        mt={{ xs: 3, sm: 5 }}
        p={3}
      >
        <Box
          width={{ xs: '100%', lg: '40%' }}
          mb={{ xs: 4, lg: 0 }}
          mx={{ xs: 'auto', lg: 3 }}
          mr={5}
          minHeight={5}
        >
          <Img fluid={aboutImg.childImageSharp.fluid} />
        </Box>
        <Flex
          alignSelf="flex-start"
          flexDirection="column"
          justifyContent="center"
          textAlign="left"
          width={{ xs: '100%', lg: '50%' }}
          pl={{ xs: 1, sm: 2, md: 3, lg: 5 }}
        >
          <Flex mb={3} flexDirection="column">
            <VerticalLine />
            <h2>
              Welcome <br /> Aboard!
            </h2>
          </Flex>
          <Text as="p" mb={5}>
            Muskoka District Rentals provides rental agent services for owners
            who seek a trusted partner to safely manage the entire process. We
            also offer premium rental experiences for guests. As a full service
            luxury rental agency, our focus is on protecting your valuable real
            estate assets while helping you safely mitigate costs of ownership.
            Our team manages all aspects of the rental process for you, from
            marketing and advertising your cottage rental to maintaining
            stringent guest screening, timely turnovers and mid stay cleans
            right through post check out inspections. As the most trusted rental
            agency in cottage country we are fully transparent and provide our
            owners with detailed financial reporting that tracks rental income
            and expenses for your property. We also maintain in house
            professional property maintenance and cleaning crews and offer full
            linen services to ensure your property is kept in optimal condition
            at all times. Whether you’re renting a cottage or renting your
            cottage, Muskoka District Rentals has you covered.
          </Text>
          <span>
            <b>Ross Halloran &amp; Maryrose Coleman -</b> Co-founders of Muskoka
            District Rentals
            <br />
            <b>Email:</b>&nbsp;
            <a href="mailto:hello@muskokadistrictrentals.com">
              hello@muskokadistrictrentals.com
            </a>
          </span>
        </Flex>
      </Flex>
    </Flex>
    <ConciergeServices />
    <SwirlBackground>
      <HorizontalScroll>
        {testimonials.nodes.map(({ id, ...testimonial }) => (
          <Testimonial {...testimonial} key={id} />
        ))}
      </HorizontalScroll>
    </SwirlBackground>
    <Contact />
  </>
);

export const query = graphql`
  query HomePage {
    logoImg: file(relativePath: { eq: "logo-white.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    headerImg: file(relativePath: { eq: "home.jpg" }) {
      ...PageImage
    }
    aboutImg: file(relativePath: { eq: "welcome.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    testimonials: allTestimonialsJson {
      nodes {
        ...Testimonial
      }
    }
  }
`;

export default IndexPage;
