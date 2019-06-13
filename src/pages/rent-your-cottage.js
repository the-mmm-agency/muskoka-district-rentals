import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import React from 'react'
import { themeGet } from 'styled-system'

import ContactForm from 'components/contactForm'
import PageImage from 'components/pageImage'
import SEO from 'components/seo'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    div {
      &:first-of-type {
        padding: 0;
      }
      &:last-of-type {
        border-right: none;
      }
      display: flex;
      flex-direction: column;
      margin-right: ${themeGet('space.3')};
      padding: 0 ${themeGet('space.2')};
      border-right: 0.5px solid rgba(0, 0, 0, 0.3);
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
    <div px={[3, 6]} py={5}>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
      <ContactForm />
    </div>
  </>
)

export const pageQuery = graphql`
  query {
    page: wordpressPage(slug: { eq: "rent-your-cottage" }) {
      title
      content
      featured_media {
        localFile {
          childImageSharp {
            fluid(quality: 100, maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default RentYourCottage
