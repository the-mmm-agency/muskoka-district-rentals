import React, { useState } from 'react'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

import Text from 'elements/text'
import Flex from 'elements/flex'
import Rental from 'components/rental'
import Link from 'components/link'

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
`

const Rentals = () => {
  const {
    allRentalsJson: { nodes: rentals },
  } = useStaticQuery(graphql`
    query {
      allRentalsJson {
        nodes {
          ...Rental
        }
      }
    }
  `)

  const [selected, setSelected] = useState(0)

  return (
    <Wrapper
      fluid={rentals[selected].image.childImageSharp.fluid}
      Tag="section"
    >
      <Text as="h3" fontSize={1} color="white" mb={5}>
        Our Rentals
      </Text>
      <Flex as="ul" flexBasis="calc(100% / 3)">
        {rentals.map((rental, index) => (
          <Rental
            key={rental.id}
            selected={index == selected}
            onMouseOver={() => setSelected(index)}
            onFocus={() => setSelected(index)}
            {...rental}
          />
        ))}
      </Flex>
      <Link
        mt={5}
        lineHeight="100px"
        fontWeight="bold"
        color="white"
        width="100%"
        textAlign="center"
        to="/cottages"
      >
        View All Rentals
      </Link>
    </Wrapper>
  )
}

export default Rentals
