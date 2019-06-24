import { graphql } from 'gatsby'
import styled from '@xstyled/emotion'
import React from 'react'

import PageContent from 'components/pageContent'
import ContactForm from 'components/contactForm'
import Layout from 'components/layout'
import { up } from 'theme/media'
import PageImage from 'components/pageImage'
import SEO from 'components/seo'

const Content = styled.div`
  ${up('sm')} {
    display: flex;
    flex-direction: column;
    h6 {
      margin-bottom: 2;
    }
    span {
      display: flex;
      font-weight: bold;
      white-space: normal;
      max-width: 50%;
    }
    & > p:first-of-type {
      color: textSecondary;
      margin-bottom: 2;
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
        margin-right: 3;
        padding: 0 2;
        border-right: 0.5px solid rgba(0, 0, 0, 0.3);
        p,
        h6 {
          padding-right: 4;
        }
        p {
          &:last-of-type {
            margin-bottom: 0;
          }
        }
        h6 {
          margin-bottom: 2;
        }
      }
      display: flex;
      flex-basis: calc(100% / 3);
      margin-top: 3;
      margin-bottom: 2;
    }
  }
`

const RentYourCottage = ({
  data: {
    page: { title, content, featured_media },
  },
}) => (
  <Layout>
    <SEO title={title} keywords={['gatsby', 'application', 'react']} />
    <PageImage
      fluid={featured_media.localFile.childImageSharp.fluid}
      Tag="section"
    />
    <PageContent>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
      <ContactForm />
    </PageContent>
  </Layout>
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
