import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import CheckAvailability from 'components/checkAvailability'
import Button from 'components/button'
import Cottage from 'components/cottage'
import Layout from 'components/layout'
import SEO from 'components/seo'

const H1 = styled.h1`
  color: #fff;
`

const List = styled.li`
  list-style: none;
  margin: 150px 0;
`

const Image = styled(BackgroundImage)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  &::before,
  &::after {
    filter: brightness(0.4);
  }
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
          fluid(quality: 100, maxHeight: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      rentals: allRentalsJson {
        nodes {
          name
          reviewAvg
          reviewCount
          startFrom
          description
          status
          squareFeet
          property
          sleeps
          beds
          bathrooms
          petFriendly
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
    <Layout>
      <SEO title="Our Rentals" />
      <Image fluid={data.image.childImageSharp.fluid} tag="section">
        <H1>Our Rentals</H1>
      </Image>
      <CheckAvailability />
      <List>
        {data.rentals.nodes.map((rental, index) => (
          <Cottage {...rental} number={index} />
        ))}
      </List>
      <ButtonWrapper>
        <StyledButton font="serif">See More Rentals</StyledButton>
      </ButtonWrapper>
    </Layout>
  )
}

export default Cottages
