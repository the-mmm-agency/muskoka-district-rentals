import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { css } from '@xstyled/emotion'
import { ChevronRight } from 'styled-icons/evil/ChevronRight'
import PropTypes from 'prop-types'

import CottageInfo from './cottage.info'
import Rating from './cottage.rating'

import { up, down } from 'theme/media'
import Box from 'elements/box'
import Flex from 'elements/flex'
import Heading from 'elements/heading'
import Text from 'elements/text'
import Hidden from 'components/hidden'
import Number from 'components/number'
import Button from 'elements/button'

const Cottage = ({
  bedrooms,
  content,
  featured_media,
  guests,
  price,
  number,
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
      <a
        href={`https://mdr5.wpengine.com/properties/${slug}`}
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
      </a>
    </Flex>
    <Img
      css={css`
        flex-grow: 1;
        flex-shrink: 1;
        align-items: flex-start;
        align-self: flex-start;
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
  fragment Cottage on wordpress__wp_property {
    id
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
