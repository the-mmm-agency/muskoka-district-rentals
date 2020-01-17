import { FluidObject } from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React, { FC } from 'react'

import ContactForm from 'components/contactForm'
import Image from 'components/pageImage'
import SEO from 'components/seo'
import Flex from 'elements/flex'
import Heading from 'elements/heading'

interface PageContext {
  title: string;
  hero: { childImageSharp: { fluid: FluidObject } };
  contactForm?: boolean;
  body: string;
}
interface PageProps {
  pageContext: PageContext;
}

const PageTemplate: FC<PageProps> = ({
  pageContext: { title, hero, contactForm = true, body },
}) => (
  <>
    <SEO title={title} />
    <Image fluid={hero?.childImageSharp?.fluid} Tag="section">
      <Heading
        as="h1"
        mb={1}
        position="relative"
        zIndex={2}
        fontWeight={500}
        maxWidth={500}
        lineHeight="70px"
      >
        {title}
      </Heading>
    </Image>
    <Flex
      px={{ xs: 3, sm: 4, md: 4, xl: 5 }}
      py={{ xs: 2, sm: 3, md: 4, xl: 5 }}
      mb={{ xs: 2, md: 3, lg: 5 }}
      flexDirection="column"
    >
      <MDXRenderer>{body}</MDXRenderer>
      {contactForm && <ContactForm />}
    </Flex>
  </>
);

export default PageTemplate;
