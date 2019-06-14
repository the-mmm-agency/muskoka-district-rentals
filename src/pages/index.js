import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import css from '@styled-system/css'
import React from 'react'

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
      css={css({
        minHeight: '40rem',
        span: {
          fontSize: 4,
        },
        'span,h1': {
          mb: 5,
        },
      })}
    >
      <span
        css={{
          fontWeight: 'bold',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
        }}
      >
        welcome to
      </span>
      <h1
        mb={5}
        css={{
          fontWeight: 'normal',
          textTransform: 'uppercase',
        }}
      >
        muskoka district
      </h1>
      <span
        css={{
          letterSpacing: '0.06em',
          fontWeight: '600',
        }}
      >
        Come unwind with us
      </span>
    </PageImage>
    <CheckAvailability />
    <section
      css={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: 6,
        textAlign: 'center',
      })}
    >
      <span
        css={css({
          justifySelf: 'flex-start',
          my: [3, 5, 6],
          pt: 5,
          color: 'text.secondary',
          textTransform: 'uppercase',
          letterSpacing: '0.35em',
        })}
      >
        about us
      </span>
      <div
        display="flex"
        flexBasis="50%"
        alignItems="center"
        justifyContent="center"
        p={3}
      >
        <Hidden down={2}>
          <div p={3} bg="background.light">
            <Img fixed={aboutImg.childImageSharp.fixed} />
          </div>
        </Hidden>
        <div
          alignSelf="flex-start"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          textAlign="left"
          width={['100%', null, null, '50%']}
          pl={[1, 2, 3, 5]}
        >
          <div mb={3} display="flex" flexDirection="column">
            <div
              css={css({
                width: '70px',
                verticalAlign: 'top',
                borderTop: '2.5px solid black',
                mb: 4,
              })}
            />
            <h2>
              Welcome <br /> Aboard!
            </h2>
          </div>
          <p width="80%" mb={5}>
            Nisi laborum dolore minim qui laborum. Ut incididunt qui ex amet
            aute cupidatat. Ullamco ex nostrud non aliqua eu adipisicing
            proident fugiat non pariatur do aliqua enim. Velit cupidatat id
            veniam labore voluptate ex nulla ut sit anim. Elit mollit est est ex
            ad ut id do ut ea ex.
          </p>
          <span>
            <strong>Ross Halloran -</strong> Founder Muskoka District Rentals
          </span>
        </div>
      </div>
    </section>
    <Rentals />
    <ConciergeServices />
    <SwirlBackground>
      <Testimonial {...testimonials.nodes[0]} />
      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          px: 5,
          mb: 6,
        })}
      >
        <span
          css={css({
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            mb: 4,
            color: 'text.secondary',
          })}
        >
          explore
        </span>
        <h2 mb={5}>Latest from our blog</h2>
        {blogPosts.edges.map(edge => (
          <PostCard key={edge.node.id} {...edge.node} />
        ))}
      </div>
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
