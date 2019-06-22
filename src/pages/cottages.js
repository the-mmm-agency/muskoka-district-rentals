import { graphql } from 'gatsby'
import React, { useState } from 'react'

import Box from 'components/box'
import Flex from 'components/flex'
import PageImage from 'components/pageImage'
import CottageList from 'components/cottageList'
import CheckAvailability from 'components/checkAvailability'
import Button from 'components/button'
import SEO from 'components/seo'

const Cottages = ({ data: { image, cottages } }) => {
  const [page, setPage] = useState(5)
  const handleClick = () => {
    setPage(page + 5)
  }
  return (
    <>
      <SEO title="Our Rentals" />
      <PageImage fluid={image.childImageSharp.fluid} tag="section">
        <h1>Our Rentals</h1>
      </PageImage>
      <Flex
        flexDirection="column"
        px={{ xs: 2, sm: 5 }}
        py={{ xs: 3, sm: 6 }}
        mt="-250px"
      >
        <CheckAvailability />
        <CottageList cottages={cottages.nodes.slice(0, page)} />
      </Flex>
      {page < cottages.nodes.length && (
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
    cottages: allWordpressWpMphbRoomType {
      nodes {
        ...Cottage
      }
    }
  }
`

export default Cottages
