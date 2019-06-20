import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { css } from '@xstyled/emotion'
import PropTypes from 'prop-types'
import React from 'react'

import Box from 'components/box'
import Link from 'components/link'
import SEO from 'components/seo'
import Breadcrumb from 'components/breadcrumb'

const BlogPost = ({
  data: {
    post: { slug, title, categories, tags, content, date, featured_media },
  },
}) => (
  <>
    <Img
      minHeight="600px"
      fluid={featured_media.localFile.childImageSharp.fluid}
    />
    <SEO title={title} description={content} />
    <Box
      css={css`
        align-items: center;
        background: backgroundLight;
        display: flex;
        padding: 5;
        margin: auto;
        margin-top: -4;
        flex-direction: column;
        position: relative;
        top: -50px;
        width: 80%;
      `}
    >
      <Box as="h1" textAlign="center" width="100%">
        {title}
      </Box>
      <Breadcrumb
        crumbs={[
          { link: '/', title: 'Home' },
          { link: '/blog', title: 'Blog' },
          { link: slug, title: title },
        ]}
      />
      <Box
        display="flex"
        borderBottom="1px solid rgba(0, 0, 0, 0.15)"
        justifyContent="space-between"
        py={4}
        px={2}
        mt={4}
        mb={5}
        width="100%"
      >
        <Box display="flex" flexDirection="column">
          <Box
            as="span"
            color="textPrimary"
            fontWeight="bold"
            fontSize="1.3rem"
            fontFamily="serif"
          >
            Date
          </Box>
          <Box as="span" color="textSecondary" fontWeight="bold">
            {date}
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box
            as="span"
            color="textPrimary"
            fontWeight="bold"
            fontSize="1.3rem"
            fontFamily="serif"
          >
            Category
          </Box>
          <Box display="inline-block">
            {categories.map(({ slug, name }, index) => (
              <Link
                key={slug}
                color="textSecondary"
                fontWeight="bold"
                textTransform="capitalize"
                to={`/categories/${slug}`}
              >
                {name}
                {index !== categories.length - 1 && <>,&nbsp;</>}
              </Link>
            ))}
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box
            as="span"
            color="textPrimary"
            fontSize="1.3rem"
            fontWeight="bold"
            fontFamily="serif"
          >
            Tags
          </Box>
          <Box display="inline-block">
            {tags.map(({ slug, name }, index) => (
              <Link
                key={slug}
                color="textSecondary"
                fontWeight="bold"
                textTransform="capitalize"
                to={`/tags/${slug}`}
              >
                {name}
                {index !== tags.length - 1 && <>,&nbsp;</>}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
      <Box width="100%">{content}</Box>
    </Box>
  </>
)

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query BlogPostByID($id: String!) {
    post: wordpressWpBlogPosts(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 4000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      categories {
        name
        slug
      }
      tags {
        name
        slug
      }
    }
  }
`

export default BlogPost
