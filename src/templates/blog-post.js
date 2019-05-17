import React from 'react'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Flex from 'elements/flex'
import Text from 'elements/text'
import Layout from 'components/layout'
import Link from 'components/link'
import SEO from 'components/seo'

const Hero = styled(Img)`
  min-height: 600px;
`

const Meta = styled(Flex)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`

const BlogPost = ({ location, data }) => {
  const postNode = data.markdownRemark
  const post = postNode.frontMatter
  return (
    <Layout>
      <Hero fluid={post.childImageSharp.fluid} />
      <SEO title={post.title} description={postNode.excerpt} />
      <Flex bg="background.light" px={1} py={3} width="80%" m="auto">
        <Text as="h1">{post.title}</Text>
        <Breadcrumb location={location} crumbLabel={post.title} />
        <Meta px={2} mt={4}>
          <Flex>
            <Text color="text.primary" fontFamily="serif">
              Date
            </Text>
            <Text color="text.secondary">{post.date}</Text>
          </Flex>
          <Flex>
            <Text color="text.primary" fontFamily="serif">
              Category
            </Text>
            {post.categories.map(category => (
              <Link
                key={category}
                textTransform="capitalize"
                to={`/categories/${category}`}
              >
                {category}
              </Link>
            ))}
          </Flex>
          <Flex>
            <Text color="text.primary" fontFamily="serif">
              Tags
            </Text>
            {post.tags.map(tag => (
              <Link key={tag} textTransform="capitalize" to={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </Flex>
        </Meta>
        <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
      </Flex>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        image
        date
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
