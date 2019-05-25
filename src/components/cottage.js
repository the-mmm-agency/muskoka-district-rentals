import React from 'react'
import styled from '@emotion/styled'
import StarRatings from 'react-star-ratings'
import PropTypes from 'prop-types'
import { ifProp } from 'styled-tools'
import Img from 'gatsby-image'

import Box from 'elements/box'
import Flex from 'elements/flex'
import Text from 'elements/text'
import Number from 'components/number'
import Button from 'components/button'
import { scale, rhythm } from 'theme/typography'
import palette from 'theme/palette'

const Wrapper = styled.div`
  background: ${palette.background.default};
  display: flex;
  justify-content: ${ifProp('reverse', 'flex-start', 'flex-end')};
  text-align: ${ifProp('reverse', 'left', 'right')};
  flex-direction: ${ifProp('reverse', 'row', 'row-reverse')};
  margin: 5rem 0;
`

const AddressWrapper = styled.div`
  border: 1px solid ${palette.text.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${rhythm(7 / 8)};
  margin: ${rhythm(3)};
  margin-top: 0;
  max-height: 350px;
`

const ViewDetail = styled(Button)`
  margin-left: ${rhythm(-2 / 3)};
`

const Image = styled(Img)`
  width: 50%;
  max-height: 30vw;
  flex-grow: 1;
  flex-shrink: 1;
`

const Properties = styled.ul`
  li {
    margin-bottom: ${rhythm(1 / 5)};
  }
  font-weight: bold;
  font-style: bold;
  margin-left: 0;
  width: 100%;
`

const Address = styled.span`
  letter-spacing: 0.2em;
  font-weight: bold;
  font-style: bold;
  text-transform: uppercase;
  writing-mode: vertical-lr;
`

const StyledNumber = styled(Number)`
  ${scale(1 / 4)};
  color: ${palette.text.secondary};
  font-weight: bold;
  font-style: bold;
`

const Cottage = ({
  name,
  reviewAvg,
  addressOne,
  reviewCount,
  baseNightlyRate,
  description,
  status,
  size,
  property,
  accommodates,
  bedrooms,
  bathrooms,
  petFriendly,
  image,
  number,
}) => {
  console.log(image)
  return (
    <Wrapper reverse={number % 2 === 0}>
      <AddressWrapper>
        <Address>{addressOne}</Address>
        <StyledNumber>{number + 1}</StyledNumber>
      </AddressWrapper>
      <Flex
        flexShrink={0}
        flexWrap="wrap"
        justifyContent="inherit"
        p={2}
        pt={0}
        width="calc(100% / 3)"
      >
        <Box mb={3}>
          <StarRatings
            rating={reviewAvg}
            starRatedColor={palette.starRated}
            numberOfStars={5}
            starSpacing="1px"
            starDimension="1rem"
            name="rating"
          />{' '}
          <Text fontWeight="medium" ml="1px">
            {reviewCount} reviews
          </Text>
        </Box>
        <Text as="h2" fontSize={1} mb={4} width="100%">
          {name}
        </Text>
        <Text fontWeight="semibold" fontSize={5} pt={2}>
          Start from{' '}
        </Text>
        <Text
          fontSize={3}
          lineHeight={1.2}
          ml={1}
          color="text.primary"
          fontWeight="bold"
        >
          {' $' + baseNightlyRate}
        </Text>
        <Text color="text.primary" fontWeight="semibold" fontSize={5} mt="auto">
          /Night
        </Text>
        <Text as="p" mt={4} maxHeight="200px" display="flex">
          {description}
        </Text>
        <Properties>
          <li>
            Status:{' '}
            {status === 'Available' ? (
              <Text color="secondary">Available</Text>
            ) : (
              'Unavailable'
            )}
          </li>
          <li>
            Square Feet:{' '}
            <Text color="text.primary" fontWeight="bold">
              {size} sqft
            </Text>
          </li>
          <li>
            Property:{' '}
            <Text color="text.primary" fontWeight="bold">
              {property}
            </Text>
          </li>
          <li>
            Sleeps:{' '}
            <Text color="text.primary" fontWeight="bold">
              {accommodates}
            </Text>
          </li>
          <li>
            Beds:{' '}
            <Text color="text.primary" fontWeight="bold">
              {bedrooms}
            </Text>
          </li>
          <li>
            Bathrooms:{' '}
            <Text color="text.primary" fontWeight="bold">
              {bathrooms}
            </Text>
          </li>
          <li>
            Pet Friendly:{' '}
            <Text color="text.primary" fontWeight="bold">
              {petFriendly ? 'Yes' : 'No'}
            </Text>
          </li>
        </Properties>
        <ViewDetail href="/" variant="transparent">
          View Details &nbsp;&rsaquo;
        </ViewDetail>
      </Flex>
      <Image fluid={image.childImageSharp.fluid} />
    </Wrapper>
  )
}

Cottage.propTypes = {
  accommodates: PropTypes.number.isRequired,
  addressOne: PropTypes.string.isRequired,
  baseNightlyRate: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  petFriendly: PropTypes.bool.isRequired,
  property: PropTypes.string.isRequired,
  reviewAvg: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  status: PropTypes.oneOf(['available', 'unavailable']).isRequired,
}

export default Cottage
