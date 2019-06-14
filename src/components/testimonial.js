import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import StarRating from 'components/starRating'

const Testimonial = ({ body, rating, author, property }) => (
  <div
    display="flex"
    flexDirection="column"
    bg="background.light"
    flexShrink={0}
    minHeight="60vh"
    alignItems="center"
    justifyContent="center"
    m="10% auto"
    p="8%"
    width={['100%', null, '80%']}
    textAlign="center"
    background="background.light"
  >
    <span
      color="text.secondary"
      textTransform="uppercase"
      letterSpacing="0.5em"
      fontWeight="bold"
      mb={4}
    >
      Testimonial
    </span>
    <h2 mb={5}>What Guests Say</h2>
    <p
      lineHeight="expanded"
      fontSize={4}
      color="text.alt"
      fontFamily="serif"
      fontStyle="italic"
    >
      &quot;{body}&quot;
    </p>
    <StarRating rating={rating} starDimension="1.5rem" />
    <span fontWeight="medium" mt={5} mb={0}>
      <b>{author} -</b> Review for {property.name} from{' '}
      <b>{property.location}</b>
    </span>
  </div>
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
