import React from 'react'
import styled from '@xstyled/emotion'
import { graphql } from 'gatsby'
import { Carousel } from 'react-responsive-carousel'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import Box from 'components/box'

const StyledCarousel = styled(Carousel)`
  .carousel.carousel-slider .control-arrow {
    opacity: 1;
    background: rgba(0, 0, 0, 0.1);
  }
`

const CottageCarousel = ({ gallery }) => (
  <Box backgroundColor="white" p={3} my={5} minWidth="100%" boxShadow={18}>
    <StyledCarousel dynamicHeight showThumbs={false} showIndicators={false}>
      {gallery.map(image => (
        <Img
          key={image.localFile.id}
          fadeIn={false}
          fluid={image.localFile.childImageSharp.fluid}
        />
      ))}
    </StyledCarousel>
  </Box>
)

export const query = graphql`
  fragment Carousel on wordpress__wp_listing {
    gallery {
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
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      localFile: PropTypes.shape({
        id: PropTypes.string.isRequired,
        childImageSharp: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default CottageCarousel
