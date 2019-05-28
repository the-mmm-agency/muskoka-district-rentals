/** @jsx jsx */

import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import StarRatings from 'react-star-ratings'
import css from '@styled-system/css'
import { graphql } from 'gatsby'

import palette from 'theme/palette'
import Text from 'elements/text'
import Flex from 'elements/flex'

const Testimonial = ({ body, rating, author, property }) => (
  <Flex
    flexDirection="column"
    bg="background.light"
    flexShrink={0}
    minHeight="60vh"
    alignItems="center"
    justifyContent="center"
    m="10% auto"
    p="8%"
    width="75vw"
    textAlign="center"
    background="background.light"
  >
    <Text
      color="text.secondary"
      textTransform="uppercase"
      letterSpacing="0.5em"
      fontWeight="bold"
      mb={4}
    >
      Testimonial
    </Text>
    <Text as="h2" mb={5}>
      What Guests Say
    </Text>
    <Text
      as="p"
      lineHeight="expanded"
      fontSize={4}
      color="text.alt"
      fontFamily="serif"
      fontStyle="italic"
    >
      &quot;{body}&quot;
    </Text>
    <StarRatings
      rating={rating}
      starRatedColor={palette.starRated}
      numberOfStars={5}
      starSpacing="1px"
      starDimension="1.5rem"
      name="rating"
    />
    <Text
      css={css({
        strong: {
          color: 'text.primary',
        },
      })}
      fontWeight="medium"
      mt={5}
      mb={0}
    >
      <strong>{author} -</strong> Review for {property.name} from{' '}
      <strong>{property.location}</strong>
    </Text>
  </Flex>
)

Testimonial.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  property: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  rating: PropTypes.number.isRequired,
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
