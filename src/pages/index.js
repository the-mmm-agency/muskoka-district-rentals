import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@xstyled/emotion'
import React from 'react'

import Box from 'components/box'
import Flex from 'components/flex'
import Text from 'components/text'
import Heading from 'components/heading'
import PageImage from 'components/pageImage'
import PageContent from 'components/pageContent'
import PostCard from 'components/postCard'
import SwirlBackground from 'components/swirlBackground'
import ConciergeServices from 'components/conciergeServices'
import Contact from 'components/contact'
import Rentals from 'components/rentals'
import Testimonial from 'components/testimonial'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Hidden from 'components/hidden'
import CheckAvailability from 'components/checkAvailability'

const IndexPage = ({
  data: { testimonials, blogPosts, headerImg, aboutImg },
}) => (
  <Layout>
    <SEO title="Home" />
    <PageImage
      Tag="section"
      fadeIn
      fluid={headerImg.childImageSharp.fluid}
      css={css`
        min-height: 35rem;
        span {
          &:first-of-type {
            font-weight: bold;
            letter-spacing: 0.35em;
            text-transform: uppercase;
          }
          &:last-of-type {
            letter-spacing: labels;
            font-weight: 600;
          }
          font-size: 4;
        }
        h1 {
          font-weight: normal;
          text-transform: uppercase;
        }
        h1,
        span {
          margin-bottom: 5;
        }
      `}
    >
      <span>welcome to</span>
      <h1>muskoka district</h1>
      <span>Come unwind with us</span>
    </PageImage>
    <PageContent
      alignItems="center"
      checkAvailability
      mt={{ xs: 0, md: '-100px' }}
      textAlign="center"
    >
      <CheckAvailability />
      <Hidden down="sm">
        <Text
          mt={{ xs: 3, sm: 5, md: 6 }}
          mb={{ xs: 2, sm: 4, md: 5 }}
          color="textSecondary"
          textTransform="uppercase"
          letterSpacing="0.35em"
        >
          about us
        </Text>
      </Hidden>
      <Flex
        flexBasis={{ xs: '100%', lg: '50%' }}
        flexDirection={{ xs: 'column', lg: 'row' }}
        alignItems="center"
        justifyContent="center"
        mt={{ xs: 3, sm: 0 }}
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
          <Box mb={3} display="flex" flexDirection="column">
            <div
              css={css`
                width: 70px;
                vertical-align: top;
                border-top: 2.5px solid black;
                margin-bottom: 4;
              `}
            />
            <h2>
              Welcome <br /> Aboard!
            </h2>
          </Box>
          <Text as="p" width={{ md: 1, lg: 0.8 }} mb={5}>
            Muskoka District Rentals provides rental agent services for owners
            who seek a trusted partner to safely manage the entire process. We
            also offer premium rental experiences for guests. Let us take away
            the stress of renting your cottage. As a full service, boutique
            luxury rental agency, our focus is on protecting your valuable real
            estate assets while helping you safely mitigate the costs of
            ownership. Our team will take care of all aspects of the rental
            process for you, from guest screening through to post check out
            inspections. We have professional property maintenance crews and
            cleaners to attend to any needs that arise. We offer a full linen
            services and all laundry is done offsite. As the most trusted rental
            agency in cottage country we operate with full transparency and you
            will always know exactly what was charged to your guests.
          </Text>
          <span>
            <b>Ross Halloran -</b> Founder Muskoka District Rentals
            <br />
            <b>Email:</b>&nbsp;
            <a href="mailto:hello@muskokadistrictrentals.com">
              hello@muskokadistrictrentals.com
            </a>
            <br />
            <b>Phone:</b>&nbsp;<a href="tel:1800-615-2537">1800-615-2537</a>
          </span>
        </Flex>
      </Flex>
    </PageContent>
    <Rentals />
    <ConciergeServices />
    <SwirlBackground>
      <Flex
        css={css`
          overflow-x: scroll;
        `}
      >
        {testimonials.nodes.map(t => (
          <Testimonial {...t} key={t.author} />
        ))}
      </Flex>
      <Flex
        css={css`
          text-align: center;
          flex-direction: column;
          align-items: center;
          padding: 0 5;
          margin-bottom: 5;
        `}
      >
        <Text variant="expanded">explore</Text>
        <Heading mb={5}>Latest from our blog</Heading>
        <Flex
          css={css`
            overflow-x: scroll;
          `}
        >
          {blogPosts.edges.map(edge => (
            <PostCard key={edge.node.id} {...edge.node} />
          ))}
        </Flex>
      </Flex>
    </SwirlBackground>
    <Contact />
  </Layout>
)

export const query = graphql`
  query {
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
    blogPosts: allWordpressWpBlogPosts(
      limit: 3
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          ...PostCard
        }
      }
    }
  }
`

export default IndexPage
