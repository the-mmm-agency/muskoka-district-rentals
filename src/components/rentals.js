import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

import Rental from 'components/rental'
import { rhythm, scale } from 'utils/typography'

const Header = styled.h3`
  ${scale(1)}
  color: #fff;
  letter-spacing: 0.2em;
  margin-bottom: ${rhythm(4)};
`

const Background = styled(BackgroundImage)`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  text-align: center;
  &::before,
  &::after {
    filter: brightness(0.5);
  }
`

const List = styled.ul`
  display: flex;
  flex-basis: calc(100% / 3);
  list-style: none;
`

const Rentals = () => {
  const data = useStaticQuery(graphql`
    query {
      allRentalsJson {
        nodes {
          id
          name
          image {
            childImageSharp {
              fluid(maxWidth: 9000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          startFrom
        }
      }
    }
  `)

  const [selected, setSelected] = useState(data.allRentalsJson.nodes[0].image)

  return (
    <Background fadeIn fluid={selected.childImageSharp.fluid} Tag="section">
      <Header>Our Rentals</Header>
      <List>
        {data.allRentalsJson.nodes.map(rental => (
          <Rental
            image={rental.image}
            name={rental.name}
            selected={rental.image === selected}
            startFrom={rental.startFrom}
            onMouseOver={() => setSelected(rental.image)}
          />
        ))}
      </List>
    </Background>
  )
}

export default Rentals
