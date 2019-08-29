import React, { useState } from 'react'
import { css } from '@xstyled/emotion'
import { graphql, useStaticQuery } from 'gatsby'

import Rental from './rental'

import { CottageCard } from 'components/cottage'
import Box from 'elements/box'
import Hidden from 'components/hidden'
import Flex from 'elements/flex'
import HorizontalScroll from 'components/horizontalScroll'
import Heading from 'elements/heading'
import PageImage from 'components/pageImage'
import Link from 'elements/link'

const Rentals = () => {
  const {
    roomTypes: { nodes: rentals },
  } = useStaticQuery(graphql`
    query {
      roomTypes: allWordpressWpProperty {
        nodes {
          ...CottageCard
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
              <CottageCard
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
            {rentals.map(
              ({ id, price, featured_media, slug, title }, index) => (
                <Rental
                  key={id}
                  selected={index == selected}
                  onMouseOver={() => setSelected(index)}
                  onFocus={() => setSelected(index)}
                  featured_media={featured_media}
                  price={price}
                  slug={slug}
                  title={title}
                />
              )
            )}
          </Flex>
          <Link
            css={css`
              width: 100%;
              margin-top: 5;
              color: white;
              font-weight: bold;
              line-height: 100px;
              text-align: center;
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
