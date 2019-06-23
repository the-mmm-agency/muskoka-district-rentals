import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import styled from '@xstyled/emotion'
import PropTypes from 'prop-types'
import React from 'react'

import Link from 'components/link'
import SEO from 'components/seo'
import Layout from 'components/layout'
import Breadcrumb from 'components/breadcrumb'

const Post = styled.div`
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
  h1 {
    text-align: center;
    width: 100%;
  }
  div:last-of-type {
    width: 100%;
  }
`

const PostHeader = styled.div`
  div {
    display: flex;
    span {
      &:first-of-type {
        color: textPrimary;
        font-size: 1.2rem;
        font-family: serif;
      }
      &:last-of-type {
        color: textSecondary;
      }
      font-weight: bold;
    }
    flex-direction: column;
    div:last-of-type {
      display: inline-block;
      a {
        color: textSecondary;
        text-transform: capitalize;
      }
    }
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  justify-content: space-between;
  padding: 4 2;
  margin-top: 4;
  margin-bottom: 5;
  width: 100%;
  display: flex;
`

const Links = ({ links, path }) =>
  links.map(({ slug, name }, index) => (
    <Link key={slug} to={`/${path}/${slug}`}>
      {name}
      {index !== links.length - 1 && <>,&nbsp;</>}
    </Link>
  ))

const BlogPost = ({
  data: {
    post: { slug, title, categories, tags, content, date, featured_media },
  },
}) => (
  <Layout>
    <Img
      minHeight="600px"
      fluid={featured_media.localFile.childImageSharp.fluid}
    />
    <SEO title={title} description={content} />
    <Post>
      <h1>{title}</h1>
      <Breadcrumb
        crumbs={[
          { link: '/', title: 'Home' },
          { link: '/blog', title: 'Blog' },
          { link: slug, title: title },
        ]}
      />
      <PostHeader>
        <div>
          <span>Date</span>
          <span>{date}</span>
        </div>
        <div>
          <span>Category</span>
          <div>
            <Links links={categories} path="categories" />
          </div>
        </div>
        <div>
          <span>Tags</span>
          <div>
            <Links links={tags} path="tags" />
          </div>
        </div>
      </PostHeader>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Post>
  </Layout>
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
