import React from 'react'
import css from '@styled-system/css'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'

const Contact = () => {
  const {
    post: { content, featured_media },
  } = useStaticQuery(graphql`
    query {
      post: wordpressPost(slug: { eq: "contact-info" }) {
        content
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      css={css({
        display: 'flex',
        flexBasis: '100%',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        py: [5, 6],
        textAlign: 'center',
        h2: {
          mb: [5, 6],
        },
        span: {
          color: 'text.light',
        },
        'h2,h3,h4,p,p > strong': {
          color: 'white',
        },
        '::before, ::after': {
          filter: 'brightness(0.4)',
        },
      })}
      Tag="section"
      fluid={featured_media.localFile.childImageSharp.fluid}
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </BackgroundImage>
  )
}

export default Contact
