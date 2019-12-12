import '@material/react-list/dist/list.css';
import '@material/react-menu-surface/dist/menu-surface.css';
import '@material/react-menu/dist/menu.css';

import { css } from '@emotion/core';
import Menu, {
  MenuList,
  MenuListItem,
  MenuListItemText,
} from '@material/react-menu';
import { graphql } from 'gatsby';
import React, { useState } from 'react';

import CheckAvailability from 'components/checkAvailability';
import { Cottage } from 'components/cottage';
import PageImage from 'components/pageImage';
import SEO from 'components/seo';
import Box from 'elements/box';
import Button from 'elements/button';
import Flex from 'elements/flex';
import useAvailability from 'hooks/useAvailabilityContext';
import { up } from 'theme/media';

const Cottages = ({
  data: {
    image,
    cottages,
    site: {
      siteMetadata: { productionUrl },
    },
    ...data
  },
}) => {
  const lakes = [{ name: 'All Lakes', wordpress_id: 0 }, ...data.lakes.nodes];
  const [page, setPage] = useState(5);
  const [lakeOpen, setLakeOpen] = useState(false);
  const [lakeAnchor, setLakeAnchor] = useState(null);
  const [lake, setLake] = useState(lakes[0]);
  const handleClick = () => {
    setPage(page + 5);
  };
  const { filterProperties } = useAvailability();
  const availableProperties = filterProperties(cottages.nodes).filter(
    property =>
      lake.wordpress_id === 0 || property.lake.includes(lake.wordpress_id)
  );
  return (
    <>
      <SEO title="Our Rentals" />
      <PageImage fluid={image.childImageSharp.fluid} tag="section">
        <h1>Our Rentals</h1>
      </PageImage>
      <Flex
        as="section"
        px={{ xs: 3, sm: 4, md: 4, xl: 5 }}
        py={{ xs: 2, sm: 3, md: 4, xl: 5 }}
        mb={{ xs: 2, md: 3, lg: 5 }}
        flexDirection="column"
        css={css`
          ${up('md')} {
            margin-top: -150px;
            padding-top: 3;
          }
        `}
      >
        <CheckAvailability />
      </Flex>
      <Flex>
        <Button
          variant="transparent"
          ml="auto"
          mr={2}
          onClick={event => {
            setLakeAnchor(event.currentTarget);
            setLakeOpen(true);
          }}
          fontSize={2}
        >
          {lake.name} ▼
        </Button>
        <Menu
          open={lakeOpen}
          anchorElement={lakeAnchor}
          onClose={() => setLakeOpen(false)}
          onSelected={index => setLake(lakes[index])}
        >
          <MenuList>
            {lakes.map(({ name, wordpress_id: id }) => (
              <MenuListItem key={id}>
                <MenuListItemText primaryText={name} />
              </MenuListItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
      <Flex height="6rem" mb={{ xs: 0, md: 6 }}>
        <Button
          variant="serif"
          m="auto"
          as="a"
          href={`${productionUrl}/advanced-search/`}
        >
          Advanced Search
        </Button>
      </Flex>
      {availableProperties.slice(0, page).map((cottage, index) => (
        <Cottage
          key={cottage.id}
          {...cottage}
          reviewAvg={4.5}
          reviewCount={6}
          number={index}
        />
      ))}
      {page < availableProperties.length && (
        <Box width="100%" textAlign="center" mb={4}>
          <Button
            textTransform="uppercase"
            mb={3}
            fontFamily="serif"
            onClick={handleClick}
          >
            See More Rentals
          </Button>
        </Box>
      )}
    </>
  );
};

export const query = graphql`
  query {
    image: file(relativePath: { eq: "our-rentals.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    lakes: allWordpressWpLake {
      nodes {
        wordpress_id
        name
      }
    }
    cottages: allWordpressWpProperty(sort: { fields: order, order: ASC }) {
      nodes {
        id
        lake
        ...Cottage
        bookedDates
      }
    }
    site: site {
      siteMetadata {
        productionUrl
      }
    }
  }
`;

export default Cottages;
