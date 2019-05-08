import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Layout from 'components/layout'
import SEO from 'components/seo'
import { scale, rhythm } from 'theme/typography'

const Wrapper = styled.div`
  padding: ${rhythm(1)} 20%;
`

const Image = styled(BackgroundImage)`
  height: 400px;
  &::before,
  &::after {
    filter: brightness(0.8);
  }
`

const Header = styled.h1`
  margin-top: 75px;
  color: #000;
  ${scale(0.8)}
  margin-bottom: 10px;
`

const SecondaryHeader = styled.h6`
  color: #000;
  ${scale(0.05)}
`

const LineItem = styled.div`
  display: block;
`

const ItemWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  &:nth-child(2) {
    margin-left: 15px;
  }
`

const ItemIcon = styled.img`
  border-radius: 8px;
`

const ItemHeader = styled.h4`
  margin-bottom: 10px;
  color: #000;
`

const ItemBody = styled.p`
  margin-bottom: 25px;
  color: rgba(0, 0, 0, 0.4);
`

const GuestServices = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "guest-services.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxHeight: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const guestServices = [
    {
      image: 'https:/placehold.it/75x75',
      name: 'Travel Insurance',
      body: `Veniam consectetur exercitation exercitation laboris fugiat irure
      fugiat exercitation ullamco ad Lorem.`,
    },
    {
      image: 'https:/placehold.it/75x75',
      name: 'Guest Concierge',
      body: `Veniam consectetur exercitation exercitation laboris fugiat irure
      fugiat exercitation ullamco ad Lorem.`,
    },
    {
      image: 'https:/placehold.it/75x75',
      name: 'Vacation Property Searches',
      body: `Veniam consectetur exercitation exercitation laboris fugiat irure
      fugiat exercitation ullamco ad Lorem.`,
    },
    {
      image: 'https:/placehold.it/75x75',
      name: 'Guest Pre-approval Registration',
      body: `Veniam consectetur exercitation exercitation laboris fugiat irure
      fugiat exercitation ullamco ad Lorem.`,
    },
  ]

  return (
    <Layout>
      <SEO title="Guest Services" />
      <Image fluid={data.file.childImageSharp.fluid} Tag="section" />
      <Wrapper>
        <Header>Guest Services</Header>
        <SecondaryHeader>
          Reserve your vacation rental with MDR.
        </SecondaryHeader>
        {guestServices.map(service => (
          <LineItem>
            <ItemWrapper>
              <ItemIcon src={service.image} />
            </ItemWrapper>
            <ItemWrapper>
              <ItemHeader>{service.name}</ItemHeader>
              <ItemBody>{service.body}</ItemBody>
            </ItemWrapper>
          </LineItem>
        ))}
      </Wrapper>
    </Layout>
  )
}

export default GuestServices
