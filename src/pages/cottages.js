import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Fade from 'react-reveal/Fade'
import React, { useState } from 'react'

import Box from 'elements/box'
import PageImage from 'components/pageImage'
import CheckAvailability from 'components/checkAvailability'
import Button from 'components/button'
import Cottage from 'components/cottage'
import SEO from 'components/seo'

const Image = styled(PageImage)`
  h1 {
    color: white;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`

const Cottages = ({ data }) => {
  const [page, setPage] = useState(5)
  const handleClick = () => {
    setPage(page + 5)
  }
  return (
    <>
      <SEO title="Our Rentals" />
      <Image fluid={data.image.childImageSharp.fluid} tag="section">
        <h1>Our Rentals</h1>
      </Image>
      <CheckAvailability />
      <Box py={[3, 6]} mx={0}>
        {data.rentals.nodes
          .filter(node => node.image !== null)
          .slice(0, page)
          .map((rental, index) => (
            <Fade key={rental.id}>
              <Cottage
                {...rental}
                reviewAvg={4.5}
                reviewCount={6}
                number={index}
              />
            </Fade>
          ))}
      </Box>
      {page < data.rentals.nodes.filter(node => node.image !== null).length && (
        <Box width="100%" textAlign="center" mb={4}>
          <Button
            textTransform="uppercase"
            mb={3}
            font="serif"
            onClick={handleClick}
          >
            See More Rentals
          </Button>
        </Box>
      )}
    </>
  )
}

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "our-rentals.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    rentals: allWordpressWpMphbRoomType {
      nodes {
        ...Cottage
      }
    }
  }
`

export default Cottages
