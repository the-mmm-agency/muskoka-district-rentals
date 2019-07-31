import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Card, { CardContent } from 'components/card'
import Heading from 'components/heading'
import Link from 'components/link'

const PostCard = ({ slug, featured_media, date, title, ...props }) => (
  <Card {...props}>
    <Img fluid={featured_media.localFile.childImageSharp.fluid} />
    <CardContent>
      <span>{date}</span>
      <Heading as="h6" mb="auto">
        {title}
      </Heading>
      <Link to={`/blog/${slug}`}>Continue &nbsp;&#10230;</Link>
    </CardContent>
  </Card>
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
