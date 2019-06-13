import React, { useState } from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import Hidden from 'components/hidden'
import ConciergeService from 'components/conciergeService'

const Wrapper = styled.section`
  display: flex;
  height: 800px;
`

const List = styled.ul`
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: #e9e9e9;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #0a252e;
  }
  min-width: 600px;
  max-height: 500px;
  margin: none;
  overflow-x: hidden;
  overflow-y: scroll;
`

const ConciergeServices = () => {
  const data = useStaticQuery(graphql`
    query {
      allConciergeServicesJson {
        nodes {
          id
          name
          link
          image {
            childImageSharp {
              fluid(maxWidth: 9000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  const [selected, setSelected] = useState(
    data.allConciergeServicesJson.nodes[0].image
  )

  return (
    <Wrapper>
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
        <List>
          {data.allConciergeServicesJson.nodes.map(service => (
            <ConciergeService
              key={service.id}
              setSelected={setSelected}
              {...service}
            />
          ))}
        </List>
      </div>
      <Hidden down={2}>
        <Img minWidth="50%" fluid={selected.childImageSharp.fluid} />
      </Hidden>
    </Wrapper>
  )
}

export default ConciergeServices
