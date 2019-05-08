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

  return (
    <Layout>
      <SEO title="Guest Services" />
      <Image fluid={data.file.childImageSharp.fluid} Tag="section" />
      <Wrapper>
        <Header>Guest Services</Header>
        <SecondaryHeader>
          Reserve your vacation rental with MDR.
        </SecondaryHeader>
        <LineItem>
          <ItemWrapper>
            <ItemIcon src="https:/placehold.it/75x75" />
          </ItemWrapper>
          <ItemWrapper>
            <ItemHeader>Guest Pre-approval Registration</ItemHeader>
            <ItemBody>
              Veniam consectetur exercitation exercitation laboris fugiat irure
              in fugiat exercitation ullamco ad Lorem.
            </ItemBody>
          </ItemWrapper>
        </LineItem>
        <LineItem>
          <ItemWrapper>
            <ItemIcon src="https:/placehold.it/75x75" />
          </ItemWrapper>
          <ItemWrapper>
            <ItemHeader>Vacation Property Searches</ItemHeader>
            <ItemBody>
              Veniam consectetur exercitation exercitation laboris fugiat irure
              fugiat exercitation ullamco ad Lorem.
            </ItemBody>
          </ItemWrapper>
        </LineItem>
        <LineItem>
          <ItemWrapper>
            <ItemIcon src="https:/placehold.it/75x75" />
          </ItemWrapper>
          <ItemWrapper>
            <ItemHeader>Guest Concierge</ItemHeader>
            <ItemBody>
              Veniam consectetur exercitation exercitation laboris fugiat irure
              fugiat exercitation ullamco ad Lorem.
            </ItemBody>
          </ItemWrapper>
        </LineItem>
        <LineItem>
          <ItemWrapper>
            <ItemIcon src="https:/placehold.it/75x75" />
          </ItemWrapper>
          <ItemWrapper>
            <ItemHeader>Travel Insurance</ItemHeader>
            <ItemBody>
              Veniam consectetur exercitation exercitation laboris fugiat irure
              fugiat exercitation ullamco ad Lorem.
            </ItemBody>
          </ItemWrapper>
        </LineItem>
      </Wrapper>
    </Layout>
  )
}

export default GuestServices
