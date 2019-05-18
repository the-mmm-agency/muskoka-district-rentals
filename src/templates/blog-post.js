import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Box from 'elements/box'
import Flex from 'elements/flex'
import Text from 'elements/text'
import Link from 'components/link'
import SEO from 'components/seo'
import Breadcrumb from 'components/breadcrumb'

const Hero = styled(Img)`
  min-height: 600px;
`

const Meta = styled(Flex)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`

const BlogPost = ({ data }) => {
  const postNode = data.markdownRemark
  const post = postNode.frontmatter
  return (
    <>
      <Hero fluid={post.image.childImageSharp.fluid} />
      <SEO title={post.title} description={postNode.excerpt} />
      <Flex
        alignItems="center"
        bg="background.light"
        p={5}
        flexDirection="column"
        width="80%"
        m="auto"
      >
        <Text as="h1" textAlign="center" width="100%">
          {post.title}
        </Text>
        <Breadcrumb
          crumbs={[
            { link: '/', title: 'Home' },
            { link: '/blog', title: 'Blog' },
            { link: postNode.slug, title: post.title },
          ]}
        />
        <Meta
          justifyContent="space-between"
          py={4}
          px={2}
          mt={4}
          mb={5}
          width="100%"
        >
          <Flex flexDirection="column">
            <Text
              color="text.primary"
              fontWeight="bold"
              fontSize="1.3rem"
              fontFamily="serif"
            >
              Date
            </Text>
            <Text color="text.secondary" fontWeight="bold">
              {post.date}
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text
              color="text.primary"
              fontWeight="bold"
              fontSize="1.3rem"
              fontFamily="serif"
            >
              Category
            </Text>
            <Box display="inline-block">
              {post.categories.map((category, index) => (
                <Link
                  key={category}
                  color="text.secondary"
                  fontWeight="bold"
                  textTransform="capitalize"
                  to={`/categories/${category}`}
                >
                  {category}
                  {index !== post.categories.length - 1 && <>,&nbsp;</>}
                </Link>
              ))}
            </Box>
          </Flex>
          <Flex flexDirection="column">
            <Text
              color="text.primary"
              fontSize="1.3rem"
              fontWeight="bold"
              fontFamily="serif"
            >
              Tags
            </Text>
            <Box display="inline-block">
              {post.tags.map((tag, index) => (
                <Link
                  key={tag}
                  color="text.secondary"
                  fontWeight="bold"
                  textTransform="capitalize"
                  to={`/tags/${tag}`}
                >
                  {tag}
                  {index !== post.tags.length - 1 && <>,&nbsp;</>}
                </Link>
              ))}
            </Box>
          </Flex>
        </Meta>
        <Box width="100%" dangerouslySetInnerHTML={{ __html: postNode.html }} />
      </Flex>
    </>
  )
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 4000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
        categories
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`

export default BlogPost
