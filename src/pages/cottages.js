import { graphql } from 'gatsby'
import React, { useState } from 'react'

import Box from 'components/box'
import PageImage from 'components/pageImage'
import PageContent from 'components/pageContent'
import useAvailabilityContext from 'hooks/useAvailabilityContext'
import CottageList from 'components/cottageList'
import checkPropertyAvailability from 'util/checkPropertyAvailability'
import CheckAvailability from 'components/checkAvailability'
import Layout from 'components/layout'
import Button from 'components/button'
import SEO from 'components/seo'

const Cottages = ({ data: { image, cottages } }) => {
  const { from, to, pets, smokers, guests } = useAvailabilityContext()
  const [page, setPage] = useState(5)
  const handleClick = () => {
    setPage(page + 5)
  }
  const filteredList = cottages.nodes.filter(cottage =>
    checkPropertyAvailability(cottage, from, to, guests, pets, smokers)
  )

  return (
    <Layout>
      <SEO title="Our Rentals" />
      <PageImage fluid={image.childImageSharp.fluid} tag="section">
        <h1>Our Rentals</h1>
      </PageImage>
      <PageContent checkAvailability>
        <CheckAvailability />
      </PageContent>
      <CottageList cottages={filteredList.slice(0, page)} />
      {page < filteredList.length && (
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
    </Layout>
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
    cottages: allWordpressWpListing {
      nodes {
        ...Cottage
        smoke
        ...Calendar
      }
    }
  }
`

export default Cottages
