import React from 'react'
import styled from '@emotion/styled'
import StarRatings from 'react-star-ratings'
import css from '@styled-system/css'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { themeGet } from 'styled-system'
import { ifProp } from 'styled-tools'

import Box from 'elements/box'
import Flex from 'elements/flex'
import Text from 'elements/text'
import Number from 'components/number'
import Button from 'components/button'
import CottageInfo from 'components/cottageInfo'
import palette from 'theme/palette'

const Wrapper = styled(Flex)`
  flex-direction: column-reverse;
  @media screen and (min-width: ${themeGet('breakpoints.0', '200px')}) {
    flex-direction: ${ifProp('reverse', 'row', 'row-reverse')};
    justify-content: ${ifProp('reverse', 'flex-start', 'flex-end')};
    text-align: ${ifProp('reverse', 'left', 'right')};
  }
`

const Description = styled.div`
  max-height: 200px;
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: normal;
`

const Image = styled(Img)(
  css({
    flexGrow: 1,
    flexShrink: 1,
    width: ['100%', '50%'],
    mb: 4,
    maxHeight: ['50vw', null, '30vw'],
  })
)

const Address = styled.span`
  font-weight: bold;
  font-style: bold;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  writing-mode: vertical-lr;
`

const AddressWrapper = styled(Flex)`
  @media screen and (max-width: ${themeGet('breakpoints.1', '400px')}) {
    display: none;
  }
`

const Cottage = ({
  name,
  reviewAvg,
  addressOne,
  reviewCount,
  lowestNightlyRate,
  description,
  status,
  size,
  type,
  accommodates,
  bedrooms,
  bathrooms,
  suitablePets,
  image,
  number,
}) => {
  return (
    <Wrapper reverse={number % 2 === 0} mx={2} my={3}>
      <AddressWrapper
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        maxHeight="350px"
        mt={0}
        border="1px solid text.secondary"
        p={4}
        mx={5}
      >
        <Address>{addressOne}</Address>
        <Number color="text.secondary" fontWeight="bold" fontSize={4}>
          {number + 1}
        </Number>
      </AddressWrapper>
      <Flex
        flexShrink={0}
        flexWrap="wrap"
        justifyContent="inherit"
        p={2}
        pt={0}
        width={['100%', '50%', 'calc(100% / 3)']}
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
        <Text as="h2" fontSize={1} mb={4} lineHeight="expanded" width="100%">
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
          {' $' + lowestNightlyRate}
        </Text>
        <Text color="text.primary" fontWeight="semibold" fontSize={5} mt="auto">
          /Night
        </Text>
        <Description
          color="text.paragraph"
          mt={4}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <CottageInfo
          accommodates={accommodates}
          bedrooms={bedrooms}
          bathrooms={bathrooms}
          suitablePets={suitablePets}
          type={type}
          size={size}
          status={status}
        />
        <Button ml="-1rem" href="/" variant="transparent">
          View Details &nbsp;&rsaquo;
        </Button>
      </Flex>
      <Image fluid={image.childImageSharp.fluid} />
    </Wrapper>
  )
}

Cottage.propTypes = {
  accommodates: PropTypes.number.isRequired,
  addressOne: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  lowestNightlyRate: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  reviewAvg: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  status: PropTypes.oneOf(['available', 'unavailable']).isRequired,
  suitablePets: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
}

export default Cottage
