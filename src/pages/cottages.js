import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'

import PageImage from 'components/pageImage'
import CheckAvailability from 'components/checkAvailability'
import Button from 'components/button'
import Cottage from 'components/cottage'
import SEO from 'components/seo'

const List = styled.li`
  margin: 150px 0;
`
const Image = styled(PageImage)`
  h1 {
    color: white;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 100px;
`

const StyledButton = styled(Button)`
  text-transform: uppercase;
  margin-bottom: 15px;
`

const Cottages = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "our-rentals.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxHeight: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      rentals: allProperties(limit: 5) {
        nodes {
          name
          addressOne
          baseNightlyRate
          description
          active
          size
          accommodates
          bedrooms
          bathrooms
          suitablePets
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

  return (
    <>
      <SEO title="Our Rentals" />
      <Image fluid={data.image.childImageSharp.fluid} tag="section">
        <h1>Our Rentals</h1>
      </Image>
      <CheckAvailability />
      <List>
        {data.rentals.nodes.map((rental, index) => (
          <Cottage
            key={rental.id}
            {...rental}
            reviewAvg={4.5}
            reviewCount={6}
            number={index}
          />
        ))}
      </List>
      <ButtonWrapper>
        <StyledButton font="serif">See More Rentals</StyledButton>
      </ButtonWrapper>
    </>
  )
}

export default Cottages
