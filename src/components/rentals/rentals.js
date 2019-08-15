import React, { useState } from 'react'
import { css } from '@xstyled/emotion'
import { graphql, useStaticQuery } from 'gatsby'

import Rental from './rental'

import PropertyCard from 'components/propertyCard'
import Box from 'components/box'
import Hidden from 'components/hidden'
import Flex from 'components/flex'
import HorizontalScroll from 'components/horizontalScroll'
import Heading from 'components/heading'
import PageImage from 'components/pageImage'
import Link from 'components/link'

const Rentals = () => {
  const {
    roomTypes: { nodes: rentals },
  } = useStaticQuery(graphql`
    query {
      roomTypes: allWordpressWpListing {
        nodes {
          ...PropertyCard
        }
      }
    }
  `)

  const [selected, setSelected] = useState(0)

  const heading = 'Our Rentals'

  return (
    <>
      <Hidden up="md">
        <Box py={3} mx={0} bg="backgroundDark">
          <Heading as="h3" my={{ sm: 3, md: 4, lg: 5 }} textAlign="center">
            {heading}
          </Heading>
          <HorizontalScroll>
            {rentals.map(rental => (
              <PropertyCard
                {...rental}
                reviewCount={5}
                reviewAvg={4.5}
                key={rental.id}
              />
            ))}
          </HorizontalScroll>
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
          <Heading as="h3" fontSize={1} color="white" mb={5}>
            {heading}
          </Heading>
          <Flex flexBasis="calc(100% / 3)" listStyle="none">
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
