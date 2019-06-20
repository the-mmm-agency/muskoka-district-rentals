import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Box from 'components/box'
import StarRating from 'components/starRating'

const Testimonial = ({ body, rating, author, property }) => (
  <Box
    display="flex"
    flexDirection="column"
    backgroundColor="backgroundLight"
    flexShrink={0}
    alignItems="center"
    justifyContent="center"
    my="10%"
    mx="auto"
    px={3}
    py={5}
    width={{ xs: '100%', md: '80%' }}
    textAlign="center"
  >
    <Box
      as="span"
      color="textSecondary"
      textTransform="uppercase"
      letterSpacing="0.7em"
      fontWeight="bold"
      fontSize={{ xs: '80%', sm: '100%' }}
      mb={4}
    >
      Testimonials
    </Box>
    <Box as="h2" fontSize={{ xs: 3, sm: 2 }} mb={{ xs: 4, sm: 5 }}>
      What Guests Say
    </Box>
    <Box
      as="p"
      lineHeight={1.4}
      fontSize={{ xs: 5, sm: 4 }}
      color="textAlt"
      fontFamily="serif"
      fontStyle="italic"
    >
      &quot;{body}&quot;
    </Box>
    <StarRating rating={rating} starDimension="1.5rem" />
    <Box as="span" fontWeight="medium" mt={{ xs: 3, sm: 5 }} mb={0}>
      <b>{author} -</b> Review for {property.name} from{' '}
      <b>{property.location}</b>
    </Box>
  </Box>
)

Testimonial.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  property: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  rating: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
}

export const query = graphql`
  fragment Testimonial on TestimonialsJson {
    author
    body
    property {
      name
      location
    }
    rating
  }
`

export default Testimonial
