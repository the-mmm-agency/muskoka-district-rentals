import { graphql } from 'gatsby'
import React, { useState } from 'react'
import { css } from '@emotion/core'

import Box from 'elements/box'
import Flex from 'elements/flex'
import PageImage from 'components/pageImage'
import { Cottage } from 'components/cottage'
import useAvailability from 'hooks/useAvailabilityContext'
import CheckAvailability from 'components/checkAvailability'
import Button from 'elements/button'
import SEO from 'components/seo'
import { up } from 'theme/media'

const Cottages = ({ data: { image, cottages } }) => {
  const [page, setPage] = useState(5)
  const handleClick = () => {
    setPage(page + 5)
  }
  const { filterProperties } = useAvailability()
  const availableProperties = filterProperties(cottages.nodes)
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
      <Flex
        alignItems="center"
        justifyContent="center"
        height="6rem"
        mb={{ xs: 0, md: 6 }}
      >
        <Button
          css={css`
            font-size: 1.5rem;
          `}
          mx="auto"
          fontFamily="serif"
          href="https://mdr5.wpengine.com/"
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
  )
}

export const query = graphql`
  query {
    image: file(relativePath: { eq: "our-rentals.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    cottages: allWordpressWpProperty {
      nodes {
        id
        ...Cottage
        bookedDates
      }
    }
  }
`

export default Cottages
