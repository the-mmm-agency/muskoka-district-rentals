import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { themeGet } from 'styled-system'

import Flex from 'elements/flex'
import Text from 'elements/text'
import Link from 'components/link'

const Wrapper = styled(Flex)`
  &:hover {
    box-shadow: ${themeGet('shadows.3')};
  }
  background-color: ${themeGet('background.light')};
  cursor: pointer;
  display: flex;
  box-shadow: ${themeGet('shadows.1')};
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
    <Flex height="40%" display="flex">
      <Text color="text.secondary">{date}</Text>
      <Text color="text.primary" fontFamily="serif" mb="auto">
        {title}
      </Text>
      <Continue to={slug} color="text.secondary" fontWeight="bold">
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

export default PostCard
