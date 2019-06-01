import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useMedia } from 'use-media'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import { rhythm, scale } from 'theme/typography'
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

const Image = styled(Img)`
  min-width: 50%;
`

const Content = styled.div`
  width: 50%;
  padding: ${rhythm(3)};
  span {
    ${scale(1 / 8)};
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }
  h3 {
    ${scale(7 / 8)};
    margin-top: ${rhythm(1)};
    margin-bottom: ${rhythm(2)};
  }
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
  const isLarge = useMedia({ minWidth: 800 })
  const [selected, setSelected] = useState(
    data.allConciergeServicesJson.nodes[0].image
  )

  return (
    <Wrapper>
      <Content>
        <span>Experience Muskoka</span>
        <h3>Concierge Services</h3>
        <List>
          {data.allConciergeServicesJson.nodes.map(service => (
            <ConciergeService
              key={service.id}
              setSelected={setSelected}
              {...service}
            />
          ))}
        </List>
      </Content>
      {isLarge && <Image fluid={selected.childImageSharp.fluid} />}
    </Wrapper>
  )
}

export default ConciergeServices
