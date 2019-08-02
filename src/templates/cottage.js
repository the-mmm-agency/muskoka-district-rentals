import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { css } from '@xstyled/emotion'
import dayjs from 'dayjs'
import { graphql } from 'gatsby'

import useAvailabilityContext from 'hooks/useAvailabilityContext'
import CottageCarousel from 'components/cottageCarousel'
import PageImage from 'components/pageImage'
import Flex from 'components/flex'
import Rates from 'components/rates'
import Beds from 'components/beds'
import PageContent from 'components/pageContent'
import Text from 'components/text'
import CottageInfo from 'components/cottageInfo'
import Button from 'components/button'
import AvailabilityCalendar from 'components/availabilityCalendar'
import Services from 'components/services'
import CheckAvailability from 'components/checkAvailability'
import Layout from 'components/layout'
import Breadcrumb from 'components/breadcrumb'
import Amenities from 'components/amenities'
import { up, down } from 'theme/media'

const Cottage = ({ data: { cottage } }) => {
  const { guests, from, to } = useAvailabilityContext()
  return (
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
      <PageContent checkAvailability mb={2}>
        <CheckAvailability
          css={css`
            ${up('md')} {
              position: sticky;
              top: 10rem;
            }
          `}
        />
        <Flex flexDirection="column" mb={2} fontSize={5}>
          <CottageCarousel images={cottage.images} />
          <Text textTransform="uppercase" fontWeight="bold">
            Start From{' '}
            <Text fontSize={3} color="textPrimary">
              ${cottage.lowestRate}
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
                value: cottage.acf.accommodates,
              },
              {
                name: 'Square Feet',
                value: cottage.size,
              },
              {
                name: 'Property',
                value: cottage.categories[0].name,
              },
              {
                name: 'Beds',
                value: cottage.acf.beds.length,
              },
              {
                name: 'Bathrooms',
                value: cottage.acf.bathrooms,
              },
            ]}
          />
        </Flex>
        <Flex
          css={css`
            background-color: backgroundLight;
            align-items: center;
            flex-direction: column;
            padding: 4 2;
            table {
              ${down('sm')} {
                width: 100%;
              }
              ${down('md')} {
                width: 90%;
              }
              margin-top: 4;
              margin-bottom: 5;
              width: 80%;
            }
            h3 {
              margin: 4 0;
            }
          `}
        >
          <h2>Overview</h2>
          <div dangerouslySetInnerHTML={{ __html: cottage.content }} />
          <h3>Beds By Room</h3>
          <Beds beds={cottage.acf.beds} />
          <h3>Amenities</h3>
          <Amenities amenities={cottage.amenities} />
          <h3>Rates and Availability</h3>
          <AvailabilityCalendar
            rates={cottage.rates}
            bookings={cottage.bookings}
          />
          <Rates rates={cottage.rates[0]} />
          <p>
            House Rules Include:
            <br />
            <br />
            {cottage.houseRules}
          </p>
          <Services services={cottage.services} />
          <a
            href={`http://muskokadis.wpengine.com/search-results/?&mphb_room_type_id=${
              cottage.wordpress_id
            }&mphb_check_in_date=${dayjs(from).format(
              'YYYY-MM-DD'
            )}&mphb_check_out_date=${dayjs(to).format(
              'YYYY-MM-DD'
            )}&mphb_adults=${guests}&mphb_children=0`}
          >
            <Button variant="serif" my={4}>
              Book Now
            </Button>
          </a>
        </Flex>
      </PageContent>
    </Layout>
  )
}

export const query = graphql`
  query CottageById($id: String!) {
    cottage: wordpressWpMphbRoomType(id: { eq: $id }) {
      ...Amenities
      ...Calendar
      ...Carousel
      ...Beds
      ...Rates
      ...Services
      title
      content
      size
      slug
      houseRules
      lowestRate
      wordpress_id
      acf {
        accommodates
        bathrooms
      }
      categories {
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
