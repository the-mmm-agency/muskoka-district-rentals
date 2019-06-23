import React from 'react'
import { graphql } from 'gatsby'
import { Carousel } from 'react-responsive-carousel'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import Box from 'components/box'

const CottageCarousel = ({ images }) => (
  <Box backgroundColor="white" p={3} my={5} minWidth="100%" boxShadow={18}>
    <Carousel dynamicHeight showThumbs={false} axis="horizontal">
      {images.map(image => (
        <Img
          key={image.localFile.id}
          fadeIn={false}
          fluid={image.localFile.childImageSharp.fluid}
        />
      ))}
    </Carousel>
  </Box>
)

export const query = graphql`
  fragment Carousel on wordpress__wp_mphb_room_type {
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
  }
`

CottageCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      localFile: PropTypes.shape({
        id: PropTypes.string.isRequired,
        childImageSharp: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default CottageCarousel
