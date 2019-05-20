import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { themeGet } from 'styled-system'

import Flex from 'elements/flex'
import Text from 'elements/text'
import Link from 'components/link'

const Wrapper = styled(Flex)`
  &:hover {
    box-shadow: ${themeGet('shadows.25')};
  }
  background-color: ${themeGet('colors.background.light')};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: ${themeGet('shadows.1')};
  width: calc(100% / 3);
`

const Continue = styled(Link)`
  &:hover {
    color: ${themeGet('colors.text.primary')};
  }
`

const PostCard = ({
  fields: { slug },
  frontmatter: { image, date, title },
}) => (
  <Wrapper>
    <Img fluid={image.childImageSharp.fluid} />
    <Flex
      height="40%"
      display="flex"
      flexDirection="column"
      px={4}
      py={3}
      textAlign="left"
    >
      <Text color="text.light" mb={1}>
        {date}
      </Text>
      <Text mb={4} as="h6">
        {title}
      </Text>
      <Continue to={slug} color="text.light" fontWeight="bold">
        Continue &nbsp;&rsaquo;
      </Continue>
    </Flex>
  </Wrapper>
)

PostCard.propTypes = {
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  frontmatter: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
  }).isRequired,
}

export const query = graphql`
  fragment PostCard on MarkdownRemark {
    id
    fields {
      slug
    }
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      image {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export default PostCard
