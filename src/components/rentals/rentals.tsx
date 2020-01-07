import styled from '@emotion/styled';
import { css } from '@xstyled/emotion';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

import Rental from './rental';

import { CottageCard } from 'components/cottage';
import Hidden from 'components/hidden';
import HorizontalScroll from 'components/horizontalScroll';
import PageImage from 'components/pageImage';
import Box from 'elements/box';
import Flex from 'elements/flex';
import Heading from 'elements/heading';
import Link from 'elements/link';

const Page = styled(PageImage)`
  min-height: 700px;
  max-height: 700px;
`;

const Rentals = () => {
  const {
    roomTypes: { nodes: rentals },
  } = useStaticQuery(graphql`
    query {
      roomTypes: allWordpressWpProperty(
        filter: { featured: { eq: "1" } }
        sort: { fields: order, order: ASC }
      ) {
        nodes {
          ...CottageCard
        }
      }
    }
  `);

  const [selected, setSelected] = useState(0);

  const heading = 'Our Rentals';

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
        <Page
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
        </Page>
      </Hidden>
    </>
  );
};

export default Rentals;
