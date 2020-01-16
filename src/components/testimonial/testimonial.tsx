import { graphql } from 'gatsby'
import React, { FC } from 'react'
import { TestimonialFragment } from 'src/graphql-types'

import StarRating from 'components/cottage/cottage.rating'
import Flex from 'elements/flex'
import Heading from 'elements/heading'
import Text from 'elements/text'

const Testimonial: FC<TestimonialFragment> = ({
  body,
  rating,
  author,
  property,
}) => (
  <Flex
    display="flex"
    flexDirection="column"
    backgroundColor="backgroundLight"
    flexShrink={0}
    alignItems="center"
    justifyContent="center"
    my="10%"
    mx={4}
    px={3}
    py={{ xs: 3, sm: 5 }}
    minWidth={{ xs: 1, sm: 0.9, md: 0.8 }}
    textAlign="center"
  >
    <Text
      color="textSecondary"
      textTransform="uppercase"
      letterSpacing="0.7em"
      fontWeight="bold"
      fontSize={{ xs: '80%', sm: '100%' }}
      mb={4}
    >
      Testimonials
    </Text>
    <Heading fontSize={{ xs: 3, sm: 2 }} mb={{ xs: 4, sm: 5 }}>
      What Guests Say
    </Heading>
    <Text
      as="p"
      lineHeight={1.4}
      fontSize={{ xs: 6, sm: 4 }}
      color="textAlt"
      fontFamily="serif"
      fontStyle="italic"
    >
      &quot;{body}&quot;
    </Text>
    <StarRating rating={rating} starDimension="1.5rem" />
    <Text fontWeight="medium" mt={{ xs: 3, sm: 5 }} mb={0}>
      <b>{author} -</b> Review for {property?.name} from{' '}
      <b>{property?.location}</b>
    </Text>
  </Flex>
);

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
`;

export default Testimonial;
