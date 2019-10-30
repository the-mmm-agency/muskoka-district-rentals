import ProductionLink from 'components/productionLink/index'
import Box from 'elements/box'
import Button from 'elements/button'
import Flex from 'elements/flex'
import Heading from 'elements/heading'
import Text from 'elements/text'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import { ChevronRight } from 'styled-icons/evil/ChevronRight'
import { down, up } from 'theme/media'

import { css } from '@xstyled/emotion'

import CottageInfo from './cottage.info'
import Rating from './cottage.rating'

const Cottage = ({
  bedrooms,
  content,
  featured_media,
  guests,
  price,
  suitability,
  category,
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
      flex-direction: row;
      justify-content: flex-start;
      text-align: left;
    `}
    my={3}
  >
    <Flex
      flexShrink={0}
      flexWrap="wrap"
      col={{ xs: 1, lg: 0.5 }}
      ml={4}
      justifyContent="inherit"
      pt={0}
      p={2}
    >
      <Box mb={3}>
        <Rating rating={reviewAvg} starDimension="1rem" />{' '}
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
        {' $' + price}
      </Text>
      <Text color="textPrimary" fontWeight="semibold" fontSize={5} mt="auto">
        /Night
      </Text>
      <Box
        maxWidth={{ xs: '100%', sm: '90%' }}
        color="textParagraph"
        css={css`
          max-height: 19rem;
          margin-top: 4;
          overflow-x: hidden;
          overflow-y: hidden;
          text-overflow: ellipsis;
          word-wrap: normal;
        `}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <CottageInfo
        size={size}
        category={category}
        guests={guests}
        bedrooms={bedrooms}
        suitability={suitability}
      />
      <ProductionLink
        href={`/properties/${slug}`}
        css={css`
          &:hover {
            text-decoration: none;
          }
        `}
      >
        <Button variant="transparent">
          See Rental &nbsp;
          <ChevronRight />
        </Button>
      </ProductionLink>
    </Flex>
    <Img
      css={css`
        flex-grow: 1;
        flex-shrink: 1;
        align-items: flex-start;
        align-self: flex-start;
        width: 100%;
        margin-bottom: 4;
        ${up('lg')} {
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
  fragment Cottage on wordpress__wp_property {
    id
    content
    suitability
    featured_media {
      localFile {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    price
    slug
    title
    ...CottageInfo
  }
`

Cottage.propTypes = {
  bedrooms: PropTypes.string.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
  featured_media: PropTypes.object.isRequired,
  guests: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  reviewAvg: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  suitability: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
}

export default Cottage
