import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import CottageList from 'components/cottageList'
import Box from 'components/box'
import Hidden from 'components/hidden'
import PageImage from 'components/pageImage'
import Rental from 'components/rental'
import Link from 'components/link'

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

  return (
    <>
      <Hidden up="sm">
        <Box py={3} mx={0} bg="backgroundDark">
          <Box as="h3" my={5} textAlign="center">
            Our Rentals
          </Box>
          <CottageList cottages={rentals} />
        </Box>
      </Hidden>
      <Hidden down="md">
        <PageImage
          minHeight={700}
          maxHeight={700}
          fluid={
            rentals[selected].featured_media.localFile.childImageSharp.fluid
          }
          Tag="section"
        >
          <Box as="h3" fontSize={1} color="white" mb={5}>
            Our Rentals
          </Box>
          <Box
            as="ul"
            display="flex"
            flexBasis="calc(100% / 3)"
            listStyle="none"
          >
            {rentals.map((rental, index) => (
              <Rental
                key={rental.id}
                selected={index == selected}
                onMouseOver={() => setSelected(index)}
                onFocus={() => setSelected(index)}
                {...rental}
              />
            ))}
          </Box>
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
      </Hidden>
    </>
  )
}

export default Rentals
