import React, { useState } from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import Fade from 'react-reveal/Fade'
import { css } from '@xstyled/emotion'

import Hidden from 'components/hidden'
import Box from 'components/box'
import { up } from 'theme/media'
import Text from 'components/text'
import Heading from 'components/heading'
import Flex from 'components/flex'
import ConciergeService from 'components/conciergeService'

const ConciergeServices = () => {
  const { conciergeServices } = useStaticQuery(graphql`
    query {
      conciergeServices: allWordpressWpConciergeServices {
        nodes {
          ...ConciergeService
        }
      }
    }
  `)
  const [selected, setSelected] = useState(
    conciergeServices.nodes[0].featured_media
  )
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
          </Heading>{' '}
        </Box>
        <ul
          css={css`
            ${up('md')} {
              height: 500px;
            }
            ::-webkit-scrollbar {
              width: 6px;
            }
            ::-webkit-scrollbar-track {
              background-color: #e9e9e9;
            }
            ::-webkit-scrollbar-thumb {
              background-color: #0a252e;
            }
            height: 300px;
            margin: none;
            padding-bottom: 5;
            width: 100%;
            overflow-x: hidden;
            overflow-y: scroll;
            list-style: none;
            -webkit-touch-scrolling: overflow;
          `}
        >
          {conciergeServices.nodes.map(service => (
            <ConciergeService
              key={service.id}
              setSelected={setSelected}
              {...service}
            />
          ))}
        </ul>
      </Box>
      <Hidden down="lg">
        <Box col={0.5} minHeight="100%">
          <Fade spy={selected} mountOnEnter>
            <Img fluid={selected.localFile.childImageSharp.fluid} />
          </Fade>
        </Box>
      </Hidden>
    </Flex>
  )
}

export default ConciergeServices
