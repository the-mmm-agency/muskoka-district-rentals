import React from 'react'
import styled from '@xstyled/emotion'
import PropTypes from 'prop-types'

import Heading from 'components/heading'
import Flex from 'components/flex'
import Grid from 'components/grid'
import Layout from 'components/layout'
import Breadcrumb from 'components/breadcrumb'
import Categories from 'components/categories'
import PostCard from 'components/postCard'
import { down } from 'theme/media'

const PostGrid = styled(Grid)`
  ${down('sm')} {
    display: flex;
    flex-direction: column;
    padding-right: 4;
  }
  ${down('md')} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.2rem;
  }
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2.4rem;
`

const Blog = ({
  data: {
    allWordpressWpBlogPosts: { nodes: posts },
  },
  crumbs,
  title,
}) => (
  <Layout>
    <Flex
      flexDirection="column"
      py={5}
      px={{ sm: 2, md: 3, lg: 4, xl: 5 }}
      backgroundColor="backgroundDefault"
    >
      <Flex alignItems="center" width="100%" flexDirection="column">
        <Heading as="h1" textAlign="center" mb={1} fontSize={2}>
          {title}
        </Heading>
        <Breadcrumb
          mb={4}
          crumbs={[
            {
              link: '/',
              title: 'Home',
            },
            {
              link: '/blog',
              title: 'Blog',
            },
            ...crumbs,
          ]}
        />
      </Flex>
      <Categories />
      <PostGrid py={2} px={{ sm: 1, md: 4, lg: 5, xl: 6 }}>
        {posts.map(
          post =>
            post.featured_media && (
              <PostCard
                key={post.id}
                {...post}
                css={{ minWidth: '100% !important' }}
              />
            )
        )}
      </PostGrid>
    </Flex>
  </Layout>
)

Blog.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
}

Blog.defaultProps = { crumbs: [] }

export default Blog
