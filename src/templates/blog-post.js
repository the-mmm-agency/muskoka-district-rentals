import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Link from 'components/link'
import SEO from 'components/seo'
import Breadcrumb from 'components/breadcrumb'

const Hero = styled(Img)`
  min-height: 600px;
`

const BlogPost = ({
  data: { slug, title, categories, tags, content, date, featured_media },
}) => {
  return (
    <>
      <Hero fluid={featured_media.localFile.childImageSharp.fluid} />
      <SEO title={title} description={content} />
      <div
        css={{
          alignItems: 'center',
          bg: 'background.light',
          p: 5,
          m: 'auto',
          mt: -4,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          top: '-50px',
          width: '80%',
        }}
      >
        <h1 textAlign="center" width="100%">
          {title}
        </h1>
        <Breadcrumb
          crumbs={[
            { link: '/', title: 'Home' },
            { link: '/blog', title: 'Blog' },
            { link: slug, title: title },
          ]}
        />
        <div
          display="flex"
          borderBottom="1px solid rgba(0, 0, 0, 0.15)"
          justifyContent="space-between"
          py={4}
          px={2}
          mt={4}
          mb={5}
          width="100%"
        >
          <div display="flex" flexDirection="column">
            <span
              color="text.primary"
              fontWeight="bold"
              fontSize="1.3rem"
              fontFamily="serif"
            >
              Date
            </span>
            <span color="text.secondary" fontWeight="bold">
              {date}
            </span>
          </div>
          <div display="flex" flexDirection="column">
            <span
              color="text.primary"
              fontWeight="bold"
              fontSize="1.3rem"
              fontFamily="serif"
            >
              Category
            </span>
            <div display="inline-block">
              {categories.map(({ slug, name }, index) => (
                <Link
                  key={slug}
                  color="text.secondary"
                  fontWeight="bold"
                  textTransform="capitalize"
                  to={`/categories/${slug}`}
                >
                  {name}
                  {index !== categories.length - 1 && <>,&nbsp;</>}
                </Link>
              ))}
            </div>
          </div>
          <div display="flex" flexDirection="column">
            <span
              color="text.primary"
              fontSize="1.3rem"
              fontWeight="bold"
              fontFamily="serif"
            >
              Tags
            </span>
            <div display="inline-block">
              {tags.map(({ slug, name }, index) => (
                <Link
                  key={slug}
                  color="text.secondary"
                  fontWeight="bold"
                  textTransform="capitalize"
                  to={`/tags/${slug}`}
                >
                  {name}
                  {index !== tags.length - 1 && <>,&nbsp;</>}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div width="100%" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  )
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
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
