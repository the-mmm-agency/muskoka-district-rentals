import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { css } from '@xstyled/emotion'
import { graphql } from 'gatsby'

import CottageCarousel from 'components/cottageCarousel'
import PageImage from 'components/pageImage'
import Flex from 'components/flex'
import Rates from 'components/rates'
import PageContent from 'components/pageContent'
import Text from 'components/text'
import CottageInfo from 'components/cottageInfo'
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
    <PageContent mb={2}>
      <Flex flexDirection="column" mb={2} fontSize={5}>
        <CottageCarousel gallery={cottage.gallery} />
        <Text textTransform="uppercase" fontWeight="bold">
          Start From{' '}
          <Text fontSize={3} color="textPrimary">
            ${cottage.price}
          </Text>
          <Text color="textPrimary">/night</Text>
        </Text>
        <CottageInfo
          css={css`
            margin-top: 2;
            & > li {
              margin-bottom: 0;
              & > span {
                font-size: 4;
                line-height: 0.6;
                text-transform: uppercase;
              }
            }
          `}
          attributes={[
            {
              name: 'Sleeps',
              value: cottage.guests,
            },
            {
              name: 'Square Feet',
              value: cottage.size,
            },
            {
              name: 'Property',
              value: cottage.category.name,
            },
            {
              name: 'Beds',
              value: cottage.bedrooms,
            },
            {
              name: 'Bathrooms',
              value: cottage.bathrooms,
            },
          ]}
        />
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
        <a href={`http://mdr3.wpengine.com/listing/${cottage.slug}`}>
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
