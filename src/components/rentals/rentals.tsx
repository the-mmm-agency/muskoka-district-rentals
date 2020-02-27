import styled from '@emotion/styled'
import { css } from '@xstyled/emotion'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import { RentalsQuery } from 'src/graphql-types'

import Rental from './rental'

import { CottageCard } from 'components/cottage'
import Hidden from 'components/hidden'
import HorizontalScroll from 'components/horizontalScroll'
import PageImage from 'components/pageImage'
import ProductionLink from 'components/productionLink'
import Box from 'elements/box'
import Flex from 'elements/flex'
import Heading from 'elements/heading'

const Page = styled(PageImage)`
  min-height: 700px;
  max-height: 700px;
`;

const Rentals = () => {
  const {
    allRentalsJson: { nodes: rentals },
  }: RentalsQuery = useStaticQuery(graphql`
    query Rentals {
      allRentalsJson {
        nodes {
          ...CottageCard
        }
      }
    }
  `);

  const [selected, setSelected] = useState(0);

  const heading = 'Rent a Cottage';

  return (
    <>
      <Hidden up="md">
        <Flex
          flexDirection="column"
          py={3}
          mx={0}
          backgroundColor="backgroundDark"
        >
          <Heading as="h3" my={{ sm: 3, md: 4, lg: 5 }} textAlign="center">
            {heading}
          </Heading>
          <HorizontalScroll>
            {rentals.map(rental => (
              <CottageCard {...rental} reviewAvg={4.5} key={rental.id} />
            ))}
          </HorizontalScroll>
          <ProductionLink
            css={css`
              width: 100%;
              color: textPrimary;
              margin-top: 5;
              text-transform: uppercase;
              letter-spacing: 0.15em;
              font-size: 1.2rem;
              text-decoration: underline;
              font-weight: bold;
              line-height: 100px;
              text-align: center;
            `}
            to="/properties"
          >
            View All Rentals
          </ProductionLink>
        </Flex>
      </Hidden>
      <Hidden down="md">
        <Flex
          as="section"
          alignItems="center"
          flexDirection="column"
          textAlign="center"
        >
          <Heading as="h3" fontSize={1} mb={5}>
            {heading}
          </Heading>
          <Flex flexBasis="calc(100% / 3)" listStyle="none">
            {rentals.map(({ id, ...rental }, index) => (
              <Rental
                key={id}
                onMouseOver={() => setSelected(index)}
                {...rental}
              />
            ))}
          </Flex>
          <ProductionLink
            css={css`
              width: 100%;
              color: textPrimary;
              margin-top: 5;
              text-transform: uppercase;
              letter-spacing: 0.15em;
              font-size: 1.2rem;
              text-decoration: underline;
              font-weight: bold;
              line-height: 100px;
              text-align: center;
            `}
            to="/properties"
          >
            View All Rentals
          </ProductionLink>
        </Flex>
      </Hidden>
    </>
  );
};

export default Rentals;
