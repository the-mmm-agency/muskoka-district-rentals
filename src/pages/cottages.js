import { graphql, useStaticQuery } from 'gatsby'
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

const Cottages = () => {
  const [page, setPage] = useState(5)
  const handleClick = () => {
    setPage(page + 5)
  }
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "our-rentals.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxHeight: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      rentals: allProperties {
        nodes {
          active
          size
          accommodates
          bedrooms
          bathrooms
          suitablePets
          name
          addressOne
          lowestNightlyRate
          description
          type
          image {
            childImageSharp {
              fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const rentals = data.rentals.nodes.slice(0, page)

  return (
    <>
      <SEO title="Our Rentals" />
      <Image fluid={data.image.childImageSharp.fluid} tag="section">
        <h1>Our Rentals</h1>
      </Image>
      <CheckAvailability />
      <Box py={6} mx={0}>
        {rentals.map((rental, index) => (
          <Fade key={rental.id}>
            <Cottage
              key={rental.id}
              {...rental}
              reviewAvg={4.5}
              reviewCount={6}
              number={index}
            />
          </Fade>
        ))}
      </Box>
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
    </>
  )
}

export default Cottages
