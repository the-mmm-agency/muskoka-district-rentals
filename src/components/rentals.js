import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

import Rental from 'components/rental'
import { rhythm, scale } from 'theme/typography'

const Wrapper = styled(BackgroundImage)`
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
  h3 {
    ${scale(0.8)}
    color: #fff;
    letter-spacing: 0.2em;
    margin-bottom: ${rhythm(2)};
  }
  ul {
    display: flex;
    flex-basis: calc(100% / 3);
    list-style: none;
  }
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
    <Wrapper fadeIn fluid={selected.childImageSharp.fluid} Tag="section">
      <h3>Our Rentals</h3>
      <ul>
        {data.allRentalsJson.nodes.map(rental => (
          <Rental
            image={rental.image}
            name={rental.name}
            selected={rental.image === selected}
            startFrom={rental.startFrom}
            onMouseOver={() => setSelected(rental.image)}
          />
        ))}
      </ul>
    </Wrapper>
  )
}

export default Rentals
