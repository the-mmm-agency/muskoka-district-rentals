import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { css } from '@xstyled/emotion'
import { ChevronRight } from 'styled-icons/evil/ChevronRight'
import PropTypes from 'prop-types'

import { up, down } from 'theme/media'
import Box from 'components/box'
import Flex from 'components/flex'
import Heading from 'components/heading'
import Text from 'components/text'
import StarRating from 'components/starRating'
import Hidden from 'components/hidden'
import Number from 'components/number'
import Button from 'components/button'
import CottageInfo from 'components/cottageInfo'

const Cottage = ({
  address,
  beds,
  content,
  featured_media,
  guests,
  night_price,
  number,
  pets,
  listing_type,
  reviewAvg,
  reviewCount,
  size,
  slug,
  title,
}) => (
  <Flex
    css={css`
      ${down('md')} {
        flex-direction: column-reverse;
      }
      ${up('md')} {
        &:nth-of-type(even) {
          flex-direction: row-reverse;
          justify-content: flex-end;
          text-align: right;
        }
      }
      justify-content: flex-start;
      flex-direction: row;
      text-align: left;
    `}
    mx={2}
    my={3}
  >
    <Hidden down="lg">
      <Flex
        maxHeight={350}
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        border="1px solid"
        borderColor="textSecondary"
        col={0.06}
        mt={0}
        mx={5}
        p={3}
      >
        <Box
          as="span"
          css={css`
            font-weight: bold;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            writing-mode: vertical-lr;
          `}
        >
          {address.replace('Canada', '').replace(/Ontario.*/, 'ON')}
        </Box>
        <Number
          css={css`
            color: textSecondary;
            font-weight: bold;
            font-size: 4;
          `}
        >
          {number + 1}
        </Number>
      </Flex>
    </Hidden>
    <Flex
      flexShrink={0}
      flexWrap="wrap"
      col={{ sm: 1, md: 0.5, lg: 0.4 }}
      justifyContent="inherit"
      pt={0}
      p={2}
    >
      <Box mb={3}>
        <StarRating rating={reviewAvg} starDimension="1rem" />{' '}
        <Text fontWeight="medium" ml="1px">
          {reviewCount} reviews
        </Text>
      </Box>
      <Heading
        dangerouslySetInnerHTML={{ __html: title }}
        fontSize={1}
        mb={4}
        lineHeight="expanded"
        width="100%"
      />
      <Text fontWeight="semibold" fontSize={5} pt={2}>
        Start from{' '}
      </Text>
      <Text
        fontSize={3}
        lineHeight={1.2}
        ml={1}
        color="textPrimary"
        fontWeight="bold"
      >
        {' $' + night_price}
      </Text>
      <Text color="textPrimary" fontWeight="semibold" fontSize={5} mt="auto">
        /Night
      </Text>
      <Box
        maxWidth={{ xs: '100%', sm: '90%' }}
        color="textParagraph"
        css={css`
          max-height: 19rem;
          overflow: hidden;
          text-overflow: ellipsis;
          word-wrap: normal;
          margin-top: 4;
        `}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <CottageInfo
        attributes={[
          {
            name: 'Square Feet',
            value: `${size} sqft`,
          },
          {
            name: 'Property',
            value: listing_type.name,
          },
          {
            name: 'Sleeps',
            value: guests,
          },
          {
            name: 'Beds',
            value: beds,
          },
          {
            name: 'Pet Friendly',
            value: pets === 1 ? 'Yes' : 'No',
          },
        ]}
      />
      <Button to={`/cottages/${slug}`} variant="transparent">
        See Rental &nbsp;
        <ChevronRight />
      </Button>
    </Flex>
    <Img
      css={css`
        align-self: flex-start;
        align-items: flex-start;
        flex-grow: 1;
        flex-shrink: 1;
        width: 100%;
        margin-bottom: 4;
        ${up('md')} {
          width: 40%;
        }
      `}
      imgStyle={{
        objectFit: 'contain',
      }}
      fluid={featured_media.localFile.childImageSharp.fluid}
    />
  </Flex>
)

export const query = graphql`
  fragment Cottage on wordpress__wp_listing {
    address
    beds
    content
    featured_media {
      localFile {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    guests
    night_price
    pets
    listing_type {
      name
    }
    size
    slug
    title
  }
`

Cottage.propTypes = {
  address: PropTypes.string.isRequired,
  beds: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  featured_media: PropTypes.object.isRequired,
  guests: PropTypes.string.isRequired,
  listing_type: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  night_price: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  pets: PropTypes.oneOf([0, 1]).isRequired,
  reviewAvg: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Cottage
