import React, { useState } from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@xstyled/emotion'

import Hidden from 'components/hidden'
import Box from 'components/box'
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
      <Box width={{ xs: '100%', lg: '50%' }} p={{ xs: 4, md: 5 }}>
        <Box textAlign={{ xs: 'center', sm: 'left' }}>
          <Text letterSpacing="headers" pl={2} textTransform="uppercase">
            Experience Muskoka
          </Text>
          <Heading mt={{ xs: 2, sm: 3 }}>Concierge Services</Heading>{' '}
        </Box>
        <ul
          css={css`
            ::-webkit-scrollbar {
              width: 6px;
            }
            ::-webkit-scrollbar-track {
              background-color: #e9e9e9;
            }
            ::-webkit-scrollbar-thumb {
              background-color: #0a252e;
            }
            max-height: 500px;
            margin: none;
            width: 100%;
            overflow-x: hidden;
            overflow-y: scroll;
            list-style: none;
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
        <Img
          css={css`
            min-width: 50%;
            min-height: 100%;
            max-height: 100%;
          `}
          fluid={selected.localFile.childImageSharp.fluid}
        />
      </Hidden>
    </Flex>
  )
}

export default ConciergeServices
