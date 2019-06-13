import React, { useState } from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'

import Rental from 'components/rental'
import Link from 'components/link'

const Rentals = () => {
  const {
    roomTypes: { nodes: rentals },
  } = useStaticQuery(graphql`
    query {
      roomTypes: allWordpressWpMphbRoomType {
        nodes {
          ...Rental
        }
      }
    }
  `)

  const [selected, setSelected] = useState(0)

  return (
    <BackgroundImage
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        maxHeight: '100vh',
        textAlign: 'center',
        '::before::after': {
          filter: 'brightness(0.5)',
        },
      }}
      fluid={rentals[selected].featured_media.localFile.childImageSharp.fluid}
      Tag="section"
    >
      <h3 fontSize={1} color="white" mb={5}>
        Our Rentals
      </h3>
      <ul display="flex" flexBasis="calc(100% / 3)">
        {rentals.map((rental, index) => (
          <Rental
            key={rental.id}
            selected={index == selected}
            onMouseOver={() => setSelected(index)}
            onFocus={() => setSelected(index)}
            {...rental}
          />
        ))}
      </ul>
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
    </BackgroundImage>
  )
}

export default Rentals
