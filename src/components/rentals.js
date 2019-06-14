import React, { useState } from 'react'
import { useMedia } from 'use-media'
import { graphql, useStaticQuery } from 'gatsby'

import CottageList from 'components/cottageList'
import PageImage from 'components/pageImage'
import Rental from 'components/rental'
import Link from 'components/link'
import theme from 'theme'

const Rentals = () => {
  const {
    roomTypes: { nodes: rentals },
  } = useStaticQuery(graphql`
    query {
      roomTypes: allWordpressWpMphbRoomType {
        nodes {
          ...Cottage
        }
      }
    }
  `)

  const [selected, setSelected] = useState(0)

  const isLarge = useMedia({ minWidth: theme.breakpoints[2] })
  if (isLarge) {
    return (
      <PageImage
        minHeight={700}
        maxHeight={700}
        fluid={rentals[selected].featured_media.localFile.childImageSharp.fluid}
        Tag="section"
      >
        <h3 fontSize={1} color="white" mb={5}>
          Our Rentals
        </h3>
        <ul display="flex" flexBasis="calc(100% / 3)" listStyle="none">
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
      </PageImage>
    )
  }
  return (
    <div py={3} mx={0} bg="background.dark">
      <h3 my={5} textAlign="center">
        Our Rentals
      </h3>
      <CottageList cottages={rentals} />
    </div>
  )
}

export default Rentals
