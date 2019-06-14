import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import React from 'react'
import { themeGet } from '@styled-system/theme-get'

import ContactForm from 'components/contactForm'
import PageImage from 'components/pageImage'
import SEO from 'components/seo'

const Content = styled.div`
  @media screen and (min-width: ${themeGet('breakpoints.1')}) {
    display: flex;
    flex-direction: column;
    & > p:first-of-type {
      color: ${themeGet('colors.text.secondary')};
      margin-bottom: 0;
    }
    div {
      display: flex;
      div {
        &:first-of-type {
          padding: 0;
        }
        &:last-of-type {
          p,
          h6 {
            padding-right: 0;
          }
          border-right: none;
        }
        display: flex;
        flex-direction: column;
        margin-right: ${themeGet('space.3')};
        padding: 0 ${themeGet('space.2')};
        border-right: 0.5px solid rgba(0, 0, 0, 0.3);
        p,
        h6 {
          padding-right: ${themeGet('space.4')};
        }
        p {
          &:last-of-type {
            margin-bottom: 0;
          }
          color: ${themeGet('colors.text.secondary')};
        }
        h6 {
          margin-bottom: ${themeGet('space.2')};
        }
      }
      display: flex;
      flex-basis: calc(100% / 3);
      margin-top: ${themeGet('space.3')};
      margin-bottom: ${themeGet('space.2')};
    }
    h6 {
      margin-bottom: ${themeGet('space.2')};
    }
    span {
      display: flex;
      font-weight: bold;
      white-space: normal;
      max-width: 50%;
    }
  }
`

const RentYourCottage = ({
  data: {
    page: { title, content, featured_media },
  },
}) => (
  <>
    <SEO title={title} keywords={[`gatsby`, `application`, `react`]} />
    <PageImage
      fluid={featured_media.localFile.childImageSharp.fluid}
      Tag="section"
    />
    <div px={[3, 4, 5, 6]} py={5}>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
      <ContactForm />
    </div>
  </>
)

export const query = graphql`
  query {
    page: wordpressPage(slug: { eq: "rent-your-cottage" }) {
      title
      content
      featured_media {
        localFile {
          ...PageImage
        }
      }
    }
  }
`

export default RentYourCottage
