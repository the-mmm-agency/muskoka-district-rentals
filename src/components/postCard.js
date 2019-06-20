import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { css } from '@xstyled/emotion'

import Box from 'components/box'
import Flex from 'components/flex'
import Link from 'components/link'

const PostCard = ({ slug, featured_media, date, title }) => (
  <Flex
    backgroundColor="backgroundLight"
    boxShadow={1}
    width={{ xs: '50%', sm: 'calc(100% / 3)' }}
    css={css`
      &:hover {
        box-shadow: 25;
      }
      flex-direction: column;
      cursor: pointer;
    `}
  >
    <Img fluid={featured_media.localFile.childImageSharp.fluid} />
    <Flex
      css={css`
        height: 40%;
        flex-direction: column;
        padding: 3 4;
        text-align: left;
      `}
    >
      <Box as="span" color="textLight" mb={1}>
        {date}
      </Box>
      <Box as="h6" mb={4}>
        {title}
      </Box>
      <Link
        to={slug}
        css={css`
          &:hover {
            color: textPrimary;
          }
          color: textLight;
          font-weight: bold;
        `}
      >
        Continue &nbsp;&rsaquo;
      </Link>
    </Flex>
  </Flex>
)

PostCard.propTypes = {
  date: PropTypes.string.isRequired,
  featured_media: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export const query = graphql`
  fragment PostCard on wordpress__wp_blog_posts {
    featured_media {
      localFile {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    id
    slug
    title
    date(formatString: "MMMM DD, YYYY")
  }
`

export default PostCard
