import styled, { css } from '@xstyled/emotion'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'

import ConciergeService from './conciergeService'

import Hidden from 'components/hidden'
import Box from 'elements/box'
import Flex from 'elements/flex'
import Heading from 'elements/heading'
import Text from 'elements/text'
import scrollbars from 'styles/scrollbars.css'
import { up } from 'theme/media'

const List = styled.ul`
  ${up('md')} {
    height: 500px;
  }
  ${scrollbars}
  width: 100%;
  height: 300px;
  margin: none;
  padding-bottom: 5;
  overflow-x: hidden;
  overflow-y: scroll;
  list-style: none;
  -webkit-touch-scrolling: overflow;
`;

const ConciergeServices = () => {
  const {
    allConciergeServicesJson: { nodes: conciergeServices },
  } = useStaticQuery(graphql`
    query {
      allConciergeServicesJson {
        nodes {
          ...ConciergeService
        }
      }
    }
  `);
  const [selected, setSelected] = useState(conciergeServices[0].image);
  return (
    <Flex
      as="section"
      minHeight={{ xs: 500, sm: 600, md: 700, lg: 800 }}
      maxHeight={{ xs: 500, sm: 600, md: 700, lg: 800 }}
      flexGrow={0}
    >
      <Box
        col={{ xs: 1, lg: 0.5 }}
        py={{ xs: 4, md: 5 }}
        pl={{ xs: 4, md: 5 }}
        pr={{ xs: 4, lg: 0 }}
      >
        <Box textAlign={{ xs: 'center', sm: 'left' }}>
          <Text letterSpacing="headers" pl={2} textTransform="uppercase">
            Experience Muskoka
          </Text>
          <Heading mt={2} mb={5}>
            Concierge Services
          </Heading>
        </Box>
        <List>
          {conciergeServices.map(conciergeService => (
            <ConciergeService
              key={conciergeService.name}
              setSelected={setSelected}
              {...conciergeService}
            />
          ))}
        </List>
      </Box>
      <Hidden down="lg">
        <Box col={0.5} minHeight="100%">
          <Fade spy={selected} mountOnEnter>
            <Img fluid={selected.childImageSharp.fluid} />
          </Fade>
        </Box>
      </Hidden>
    </Flex>
  );
};

export default ConciergeServices;
