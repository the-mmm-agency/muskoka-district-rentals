import { SystemProps } from '@xstyled/system'
import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import React from 'react'

import ContactForm from 'components/contactForm'
import Image from 'components/pageImage'
import SEO from 'components/seo'
import Flex from 'elements/flex'
import Heading from 'elements/heading'

interface Page {
  content: string;
  featured_media: {
    localFile: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
  title: string;
}

interface PageContentProps extends SystemProps {
  children: React.ReactNode;
  contact: boolean;
  checkAvailability: boolean;
  page: Page;
}

const PageContent: React.FC<PageContentProps> = ({
  children,
  contact,
  checkAvailability,
  page,
  ...props
}) => (
  <>
    {page && (
      <>
        <SEO title={page.title} />
        <Image
          fluid={page.featured_media.localFile.childImageSharp.fluid}
          Tag="section"
        >
          {' '}
          <Heading
            as="h1"
            mb={1}
            position="relative"
            zIndex={2}
            fontWeight={500}
            maxWidth={500}
            lineHeight="70px"
          >
            {page.title}
          </Heading>
        </Image>
      </>
    )}
    <Flex
      px={{ xs: 3, sm: 4, md: 4, xl: 5 }}
      py={{ xs: 2, sm: 3, md: 4, xl: 5 }}
      mb={{ xs: 2, md: 3, lg: 5 }}
      flexDirection="column"
      {...props}
    >
      {page && <div dangerouslySetInnerHTML={{ __html: page.content }} />}
      {children}
      {contact && <ContactForm />}
    </Flex>
  </>
);

export const query = graphql`
  fragment Page on wordpress__wp_page_content {
    title
    content
    featured_media {
      localFile {
        ...PageImage
      }
    }
  }
`;

export default PageContent;
