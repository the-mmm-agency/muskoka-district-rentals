import React from 'react'
import styled from '@xstyled/emotion'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'

import { up } from 'theme/media'

const Image = styled(BackgroundImage)`
  h2,
  h3,
  h4,
  p,
  p > strong {
    color: white;
  }
  &::before,
  &::after {
    filter: brightness(0.4);
  }
  h2 {
    margin-bottom: 5;
    ${up('sm')} {
      margin-bottom: 6;
    }
  }
  span {
    color: textLight;
  }
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 5 0;
  ${up('sm')} {
    padding: 6 0;
  }
`

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
    <Image Tag="section" fluid={featured_media.localFile.childImageSharp.fluid}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Image>
  )
}

export default Contact
