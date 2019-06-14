import React, { useState } from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import Hidden from 'components/hidden'
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
    <section display="flex" height="800px">
      <div width="50%" p={[4, null, 5]}>
        <span
          css={{
            letterSpacing: 'headers',
          }}
          pl={2}
          textTransform="uppercase"
        >
          Experience Muskoka
        </span>
        <h2 mt={3}>Concierge Services</h2>
        <ul
          css={{
            '::-webkit-scrollbar': {
              width: '6px',
            },
            '::-webkit-scrollbar-track': {
              backgroundColor: '#e9e9e9',
            },
            '::-webkit-scrollbar-thumb': {
              backgroundColor: '#0a252e',
            },
            minWidth: '600px',
            maxHeight: '500px',
            margin: 'none',
            overflowX: 'hidden',
            overflowY: 'scroll',
            listStyle: 'none',
          }}
        >
          {conciergeServices.nodes.map(service => (
            <ConciergeService
              key={service.id}
              setSelected={setSelected}
              {...service}
            />
          ))}
        </ul>
      </div>
      <Hidden down={2}>
        <Img minWidth="50%" fluid={selected.localFile.childImageSharp.fluid} />
      </Hidden>
    </section>
  )
}

export default ConciergeServices
