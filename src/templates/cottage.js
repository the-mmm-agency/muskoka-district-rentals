import React from 'react'
import Img from 'gatsby-image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { css } from '@xstyled/emotion'
import { graphql } from 'gatsby'

import Box from 'components/box'
import PageImage from 'components/pageImage'
import Button from 'components/button'
import AvailabilityCalendar from 'components/availabilityCalendar'
import CheckAvailability from 'components/checkAvailability'
import Breadcrumb from 'components/breadcrumb'
import Amenities from 'components/amenities'

const Cottage = ({ data: { cottage } }) => (
  <Box textAlign="center">
    <PageImage
      Tag="section"
      fadeIn
      fluid={cottage.featured_media.localFile.childImageSharp.fluid}
    >
      <h1>{cottage.title}</h1>
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
    <Box
      as="section"
      bg="#eeeeee"
      display="flex"
      mt="-75px"
      px={5}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <CheckAvailability />
      <Box
        bg="white"
        p={3}
        my={5}
        minWidth="100%"
        css={css`
          box-shadow: 0 8px 11px -5px rgba(0, 0, 0, 0.05),
            0 17px 26px 2px rgba(0, 0, 0, 0.05),
            0 6px 32px 5px rgba(0, 0, 0, 0.05);
        `}
      >
        <Carousel
          css={css`
            min-height: 800px;
            min-width: 100%;
          `}
          dynamicHeight
          showThumbs={false}
          axis="horizontal"
        >
          {cottage.images.map(image => (
            <Img
              key={image.localFile.id}
              fadeIn={false}
              fluid={image.localFile.childImageSharp.fluid}
            />
          ))}
        </Carousel>
      </Box>
      <Box as="span" textTransform="uppercase" fontWeight="bold">
        Start From{' '}
        <Box as="span" fontSize={3} color="textPrimary">
          ${cottage.lowestRate}
        </Box>
        <Box as="span" color="textPrimary">
          /night
        </Box>
      </Box>
      <ul
        css={css`
          li {
            margin-bottom: 0;
          }
          margin: auto;
          list-style: none;
          font-weight: bold;
          margin-bottom: 5;
          text-transform: uppercase;
        `}
      >
        <li>
          Sleeps: <b>{cottage.acf.accommodates}</b>
        </li>
        <li>
          Square Feet: <b>{cottage.size} SQFT</b>
        </li>
        <li>
          Property: <b>{cottage.categories[0].name}</b>
        </li>
        <li>
          Beds: <b>{cottage.acf.beds.length}</b>
        </li>
        <li>
          Bathrooms: <b>{cottage.acf.bathrooms}</b>
        </li>
      </ul>
    </Box>
    <Box as="section" px={6} bg="white" minWidth="100vw" mr="-5rem" py={4}>
      <Box as="h2" my={5}>
        Overview
      </Box>
      <Box my={5} dangerouslySetInnerHTML={{ __html: cottage.content }} />
      <Amenities amenities={cottage.amenities} />
      <Box as="h3" my={4}>
        Rates and Availability
      </Box>
      <AvailabilityCalendar
        css={css`
          width: 80%;
        `}
        rates={cottage.rates}
      />
      <Box as="table" m="auto" mt={4} mb={6} width="80%">
        <thead>
          <tr>
            <th>rate period</th>
            <th>daily</th>
            <th>weekly</th>
            <th>monthly</th>
          </tr>
        </thead>
        <tbody>
          {cottage.rates[0].seasonPrices.map(({ price, season }) => (
            <tr key={season[0].title}>
              <td>
                {season[0].title}
                <br />
                {season[0].startDate} - {season[0].endDate}
              </td>
              <td>${price.prices[0]}</td>
              <td>
                $
                {price.prices.length > 1
                  ? price.prices[1]
                  : price.prices[0] * 7}
              </td>
              <td>
                $
                {price.prices.length > 2
                  ? price.prices[2]
                  : price.prices[0] * 30}
              </td>
            </tr>
          ))}
        </tbody>
      </Box>
      <Box as="p" textAlign="center" width="60%" m="auto" mb={6}>
        House Rules Include:
        <br />
        <br />
        {cottage.houseRules}
      </Box>
      <Box as="table" m="auto" width="80%">
        <thead>
          <tr>
            <th>Fee</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {cottage.services.map(({ title, mphb_price: price }) => (
            <tr key={price}>
              <td>{title}</td>
              <td>${price}</td>
            </tr>
          ))}
        </tbody>
      </Box>
      <a
        href={`http://muskokadis.wpengine.com/search-results/?&mphb_room_type_id=${cottage.wordpress_id}&mphb_check_in_date=2019-07-26&mphb_check_out_date=2019-07-27&mphb_adults=14&mphb_children=0`}
      >
        <Button m="auto" size="large" textTransform="uppercase" my={4}>
          Book Now
        </Button>
      </a>
    </Box>
  </Box>
)

export const query = graphql`
  query CottageById($id: String!) {
    cottage: wordpressWpMphbRoomType(id: { eq: $id }) {
      ...Amenities
      title
      wordpress_id
      content
      size
      acf {
        accommodates
        bathrooms
        beds {
          room_type
        }
      }
      services {
        title
        mphb_price
      }
      rates {
        seasonPrices {
          price {
            prices
          }
          season {
            days
            startDate
            endDate
            title
          }
        }
      }
      categories {
        name
      }
      address {
        lat
        lng
      }
      houseRules
      lowestRate
      images {
        localFile {
          id
          childImageSharp {
            fluid(maxWidth: 4096, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
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
