import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@xstyled/emotion'
import React from 'react'

import Box from 'components/box'
import Flex from 'components/flex'
import PageImage from 'components/pageImage'
import PostCard from 'components/postCard'
import SwirlBackground from 'components/swirlBackground'
import ConciergeServices from 'components/conciergeServices'
import Contact from 'components/contact'
import Rentals from 'components/rentals'
import Testimonial from 'components/testimonial'
import SEO from 'components/seo'
import Hidden from 'components/hidden'
import CheckAvailability from 'components/checkAvailability'

const IndexPage = ({
  data: { testimonials, blogPosts, headerImg, aboutImg },
}) => (
  <>
    <SEO title="Home" />
    <PageImage
      Tag="section"
      fadeIn
      fluid={headerImg.childImageSharp.fluid}
      css={css`
        min-height: 40rem;
        span {
          font-size: 4;
        }
        h1,
        span {
          margin-bottom: 5;
        }
      `}
    >
      <span
        css={css`
          font-weight: bold;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        `}
      >
        welcome to
      </span>
      <h1
        css={css`
          margin-bottom: 5;
          font-weight: normal;
          text-transform: uppercase;
        `}
      >
        muskoka district
      </h1>
      <span
        css={css`
          letter-spacing: 0.06em;
          font-weight: 600;
        `}
      >
        Come unwind with us
      </span>
    </PageImage>
    <Flex
      as="section"
      flexDirection="column"
      alignItems="center"
      mt={{ xs: 0, md: '-100px' }}
      px={5}
      mb={{ xs: 3, md: 5, lg: 6 }}
      textAlign="center"
    >
      <CheckAvailability />
      <Hidden down="sm">
        <Box
          as="span"
          mt={{ xs: 3, sm: 5, md: 6 }}
          mb={{ xs: 2, sm: 4, md: 5 }}
          color="textSecondary"
          textTransform="uppercase"
          letterSpacing="0.35em"
        >
          about us
        </Box>
      </Hidden>
      <Box
        display="flex"
        flexBasis="50%"
        alignItems="center"
        justifyContent="center"
        mt={{ xs: 3, sm: 0 }}
        p={3}
      >
        <Hidden down="md">
          <Box p={3} bg="backgroundLight">
            <Img fixed={aboutImg.childImageSharp.fixed} />
          </Box>
        </Hidden>
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
          <Box as="p" width="80%" mb={5}>
            Nisi laborum dolore minim qui laborum. Ut incididunt qui ex amet
            aute cupidatat. Ullamco ex nostrud non aliqua eu adipisicing
            proident fugiat non pariatur do aliqua enim. Velit cupidatat id
            veniam labore voluptate ex nulla ut sit anim. Elit mollit est est ex
            ad ut id do ut ea ex.
          </Box>
          <span>
            <b>Ross Halloran -</b> Founder Muskoka District Rentals
          </span>
        </Flex>
      </Box>
    </Flex>
    <Rentals />
    <ConciergeServices />
    <SwirlBackground>
      <Testimonial {...testimonials.nodes[0]} />
      <Flex
        css={css`
          text-align: center;
          flex-direction: column;
          align-items: center;
          padding: 0 5;
          margin-bottom: 5;
        `}
      >
        <span
          css={css`
            letter-spacing: 0.5em;
            text-transform: uppercase;
            font-weight: bold;
            margin-bottom: 4;
            color: textSecondary;
          `}
        >
          explore
        </span>
        <Box as="h2" mb={5}>
          Latest from our blog
        </Box>
        {blogPosts.edges.map(edge => (
          <PostCard key={edge.node.id} {...edge.node} />
        ))}
      </Flex>
    </SwirlBackground>
    <Contact />
  </>
)

export const query = graphql`
  query {
    headerImg: file(relativePath: { eq: "home.jpg" }) {
      ...PageImage
    }
    aboutImg: file(relativePath: { eq: "welcome.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 500) {
          ...GatsbyImageSharpFixed_withWebp
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
