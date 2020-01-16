import { SystemProps } from '@xstyled/system'
import React, { FC } from 'react'

import ContactForm from 'components/contactForm'
import Flex from 'elements/flex'

interface PageContentProps extends SystemProps {
  children?: React.ReactNode;
  contact?: boolean;
  checkAvailability?: boolean;
}

const PageContent: FC<PageContentProps> = ({
  children,
  contact,
  checkAvailability,
  ...props
}) => (
  <Flex
    px={{ xs: 3, sm: 4, md: 4, xl: 5 }}
    py={{ xs: 2, sm: 3, md: 4, xl: 5 }}
    mb={{ xs: 2, md: 3, lg: 5 }}
    flexDirection="column"
    {...props}
  >
    {children}
    {contact && <ContactForm />}
  </Flex>
);

export default PageContent;
