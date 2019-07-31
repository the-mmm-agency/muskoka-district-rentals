import React from 'react'
import PropTypes from 'prop-types'

import Heading from 'components/heading'
import Flex from 'components/flex'
import Grid from 'components/grid'
import Layout from 'components/layout'
import Breadcrumb from 'components/breadcrumb'
import Categories from 'components/categories'
import PostCard from 'components/postCard'

const Blog = ({
  data: {
    allWordpressWpBlogPosts: { nodes: posts },
  },
  crumbs,
  title,
}) => (
  <Layout>
    <Flex flexDirection="column" p={5} backgroundColor="backgroundDefault">
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
      <Grid py={2} px={6} gridTemplateColumns="1fr 1fr 1fr" gridColumnGap={4}>
        {posts.map(
          post =>
            post.featured_media && (
              <PostCard key={post.id} {...post} minWidth="100%" />
            )
        )}
      </Grid>
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
