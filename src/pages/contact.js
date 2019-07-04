import React from 'react'
import { graphql } from 'gatsby'

import ContactForm from 'components/contactForm'
import ContactSection from 'components/contact'
import PageImage from 'components/pageImage'
import Layout from 'components/layout'
import PageContent from 'components/pageContent'
import SEO from 'components/seo'

const Contact = ({ data: { image } }) => (
  <Layout>
    <SEO title="Contact Us" keywords={['gatsby', 'application', 'react']} />
    <PageImage Tag="section" fluid={image.childImageSharp.fluid} />
    <PageContent>
      <ContactForm />
    </PageContent>
    <ContactSection />
  </Layout>
)

export const query = graphql`
  query {
    image: file(relativePath: { eq: "home.jpg" }) {
      ...PageImage
    }
  }
`

export default Contact
