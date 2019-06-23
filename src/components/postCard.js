import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import styled from '@xstyled/emotion'

import Flex from 'components/flex'
import Link from 'components/link'
import { transition } from 'theme/transitions'

const Wrapper = styled(Flex)`
  &:hover {
    box-shadow: 25;
    transform: translateY(-3px);
    div a {
      color: textPrimary;
    }
  }
  flex-direction: column;
  box-shadow: 1;
  background-color: backgroundLight;
  ${transition(['transform', 'box-shadow'])};
  div {
    display: flex;
    height: 40%;
    flex-direction: column;
    padding: 3 4;
    text-align: left;
    a {
      &:hover {
        text-decoration: none;
      }
      font-weight: bold;
      ${transition('color')};
    }
    a,
    span {
      color: textLight;
      margin-bottom: 1;
    }
    h6 {
      margin-bottom: 5;
    }
  }
`

const PostCard = ({ slug, featured_media, date, title }) => (
  <Wrapper width={{ xs: '50%', sm: 'calc(100% / 3)' }}>
    <Img fluid={featured_media.localFile.childImageSharp.fluid} />
    <div>
      <span>{date}</span>
      <h6>{title}</h6>
      <Link to={`/blog/${slug}`}>Continue &nbsp;&#10230;</Link>
    </div>
  </Wrapper>
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
