import styled from '@xstyled/emotion'
import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import React, { FC } from 'react'
import { GuestServicesJson } from 'src/graphql-types'

import Box from 'elements/box'
import Flex from 'elements/flex'
import Heading from 'elements/heading'
import Text from 'elements/text'
import { down, up } from 'theme/media'

const Icon = styled(Img)`
  img {
    width: 100%;
  }
  display: flex;
  width: 8em;
  flex-shrink: 0;
  flex-grow: 0;
  ${down('sm')} {
    display: none;
  }
  align-items: center;
  margin-inline-start: 0;
  margin-inline-end: 0;
  margin-right: 4;
  margin-bottom: 4;
`;

type GuestServiceProps = Pick<
  GuestServicesJson,
  'name' | 'description' | 'icon'
>;

const GuestService: FC<GuestServiceProps> = ({ name, description, icon }) => (
  <Flex mb={2}>
    <Icon fluid={icon?.childImageSharp?.fluid} />
    <Box mt={1}>
      <Heading
        as="h6"
        mb={1}
        fontSize={4}
        fontFamily="serif"
        whiteSpace="nowrap"
      >
        {name}
      </Heading>
      <Text as="p" maxWidth="800px">
        <div dangerouslySetInnerHTML={{ __html: description as string }} />
      </Text>
    </Box>
  </Flex>
);

export const query = graphql`
  fragment GuestService on GuestServicesJson {
    name
    description
    icon {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default GuestService;
