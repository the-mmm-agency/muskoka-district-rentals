import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
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

const ItemIcon = styled(Img)`
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
      header: file(relativePath: { eq: "guest-services.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxHeight: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      guestServices: allGuestServicesJson {
        nodes {
          id
          name
          image {
            childImageSharp {
              fixed(width: 75, height: 75) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Guest Services" />
      <Image fluid={data.header.childImageSharp.fluid} Tag="section" />
      <Wrapper>
        <Header>Guest Services</Header>
        <SecondaryHeader>
          Reserve your vacation rental with MDR.
        </SecondaryHeader>
        {data.guestServices.nodes.map(service => (
          <LineItem key={service.id}>
            <ItemWrapper>
              <ItemIcon fixed={service.image.childImageSharp.fixed} />
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
