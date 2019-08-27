import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { css } from '@xstyled/emotion'
import { graphql } from 'gatsby'
import { Bed } from 'styled-icons/boxicons-regular/Bed'
import { Home } from 'styled-icons/boxicons-regular/Home'
import { PersonOutline } from 'styled-icons/material/PersonOutline'
import { Ruler } from 'styled-icons/boxicons-regular/Ruler'
import { Bath } from 'styled-icons/boxicons-regular/Bath'

import CottageCarousel from 'components/cottageCarousel'
import PageImage from 'components/pageImage'
import Flex from 'components/flex'
import Rates from 'components/rates'
import PageContent from 'components/pageContent'
import Text from 'components/text'
import Button from 'components/button'
import AvailabilityCalendar from 'components/availabilityCalendar'
import Layout from 'components/layout'
import Breadcrumb from 'components/breadcrumb'
import Amenities from 'components/amenities'
import { down } from 'theme/media'

const Cottage = ({ data: { cottage } }) => (
  <Layout
    css={css`
      text-align: center;
    `}
  >
    <PageImage
      css={css`
        min-height: 45rem;
      `}
      fluid={cottage.featured_media.localFile.childImageSharp.fluid}
    >
      <h1 dangerouslySetInnerHTML={{ __html: cottage.title }} />
      <Breadcrumb
        activeColor="white"
        color="white"
        crumbs={[
          { link: '/', title: 'Home' },
          { link: '/cottages', title: 'Our Rentals' },
          { link: cottage.slug, title: cottage.title },
        ]}
      />
    </PageImage>
    <Flex
      backgroundColor="backgroundDark"
      css={css`
        align-items: flex-end;
        & > span {
          display: inline-flex;
          flex: 1 1 auto;
          font-weight: 600;
          flex-wrap: nowrap;
          max-width: fit-content;
          margin-right: 5;
          font-size: 1;
        }
        & > svg {
          width: 2em;
          height: 2em;
          margin-top: 1em;
          margin-right: 0.4rem;
          color: textPrimary;
        }
      `}
      px={4}
      pt={3}
      pb={4}
    >
      <Home />
      <Text>{cottage.category.name}</Text>
      <PersonOutline />
      <Text>{cottage.guests}&nbsp;Guests</Text>
      <Bed />
      <Text>{cottage.beds}&nbsp;Beds</Text>
      <Ruler />
      <Text>{cottage.size}&nbsp;SqFt</Text>
      <Bath />
      <Text>{cottage.bathrooms}&nbsp;Bathrooms</Text>
      <Text
        fontWeight="bold"
        fontSize="1.1em !important"
        justifyContent="center"
        mt="auto"
        ml="auto"
        lineHeight="1em"
      >
        Start From
        <Text fontSize={3} pl={2} color="textPrimary">
          ${cottage.price}
        </Text>
        <Text color="textPrimary" px={1}>
          /Night
        </Text>
      </Text>
    </Flex>
    <PageContent mb={2}>
      <Flex flexDirection="column" mb={2} fontSize={5}>
        <CottageCarousel gallery={cottage.gallery} />
      </Flex>
      <Flex
        css={css`
          flex-direction: column;
          align-items: center;
          padding: 4 2;
          background-color: backgroundLight;
          table {
            ${down('sm')} {
              width: 100%;
            }
            ${down('md')} {
              width: 90%;
            }
            width: 80%;
            margin-top: 4;
            margin-bottom: 5;
          }
          h3 {
            margin: 4 0;
          }
        `}
      >
        <h2>Overview</h2>
        <div dangerouslySetInnerHTML={{ __html: cottage.content }} />
        <h3>Amenities</h3>
        <Amenities amenities={cottage.amenities} />
        <h3>Rates and Availability</h3>
        <AvailabilityCalendar bookedDates={cottage.bookedDates} />
        <Rates
          price={cottage.price}
          pricePerWeek={cottage.pricePerWeek}
          pricePerMonth={cottage.pricePerMonth}
        />
        <p>
          House Rules Include:
          <br />
          <br />
          <div dangerouslySetInnerHTML={{ __html: cottage.houseRules }} />
        </p>
        <a href={`http://mdr5.wpengine.com/property/${cottage.slug}`}>
          <Button variant="serif" my={4}>
            Book Now
          </Button>
        </a>
      </Flex>
    </PageContent>
  </Layout>
)

export const query = graphql`
  query CottageById($id: String!) {
    cottage: wordpressWpProperty(id: { eq: $id }) {
      ...Amenities
      ...Calendar
      ...Carousel
      ...Rates
      title
      content
      size
      slug
      houseRules
      price
      bedrooms
      wordpress_id
      bathrooms
      guests
      category {
        name
      }
      featured_media {
        localFile {
          ...PageImage
        }
      }
    }
  }
`

export default Cottage
