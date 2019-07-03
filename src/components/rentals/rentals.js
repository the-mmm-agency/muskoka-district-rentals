import React, { useState } from 'react'
import { css } from '@xstyled/emotion'
import { graphql, useStaticQuery } from 'gatsby'

import Rental from './rental'

import PropertyCard from 'components/propertyCard'
import Box from 'components/box'
import Hidden from 'components/hidden'
import Flex from 'components/flex'
import PageImage from 'components/pageImage'
import Link from 'components/link'

const Rentals = () => {
  const {
    roomTypes: { nodes: rentals },
  } = useStaticQuery(graphql`
    query {
      roomTypes: allWordpressWpMphbRoomType {
        nodes {
          ...PropertyCard
        }
      }
    }
  `)

  const [selected, setSelected] = useState(0)

  return (
    <>
      <Hidden up="md">
        <Box py={3} mx={0} bg="backgroundDark">
          <Box as="h3" my={5} textAlign="center">
            Our Rentals
          </Box>
          <Flex
            px={5}
            css={css`
              overflow-x: scroll;
            `}
          >
            {rentals.map(rental => (
              <PropertyCard
                {...rental}
                reviewCount={5}
                reviewAvg={4.5}
                key={rental.id}
              />
            ))}
          </Flex>
        </Box>
      </Hidden>
      <Hidden down="md">
        <PageImage
          css={css`
            min-height: 700px;
            max-height: 700px;
          `}
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
            css={css`
              line-height: 100px;
              font-weight: bold;
              color: white;
              width: 100%;
              text-align: center;
              margin-top: 5;
            `}
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
