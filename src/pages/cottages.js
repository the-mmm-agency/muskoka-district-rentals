import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Cottage from 'components/cottage'
import Layout from 'components/layout'
import SEO from 'components/seo'

const H1 = styled.h1`
  color: #fff;
`

const List = styled.li`
  list-style: none;
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
      <List>
        {data.rentals.nodes.map((rental, index) => (
          <Cottage {...rental} number={index} />
        ))}
      </List>
    </Layout>
  )
}

export default Cottages
