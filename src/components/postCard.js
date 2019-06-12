import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Link from 'components/link'

const PostCard = ({ slug, featured_media, date, title }) => (
  <div
    css={{
      '&:hover': {
        boxShadow: 25,
      },
      flexDirection: 'column',
      backgroundColor: 'background.light',
      boxShadow: 1,
      cursor: 'pointer',
      width: 'calc(100% / 3)',
    }}
  >
    <Img fluid={featured_media.localFile.childImageSharp.fluid} />
    <div
      height="40%"
      display="flex"
      flexDirection="column"
      px={4}
      py={3}
      textAlign="left"
    >
      <span color="text.light" mb={1}>
        {date}
      </span>
      <h6 mb={4}>{title}</h6>
      <Link
        to={slug}
        css={{
          '&:hover': {
            color: 'text.primary',
          },
        }}
        color="text.light"
        fontWeight="bold"
      >
        Continue &nbsp;&rsaquo;
      </Link>
    </div>
  </div>
)

PostCard.propTypes = {
  date: PropTypes.string.isRequired,
  featured_media: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export const query = graphql`
  fragment PostCard on wordpress__POST {
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
