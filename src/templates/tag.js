import { graphql } from 'gatsby'

export { default } from './category'

export const query = graphql`
  query TagPage($id: String!) {
    allWordpressWpBlogPost(
      sort: { fields: date, order: DESC }
      filter: { tags: { elemMatch: { id: { eq: $id } } } }
    ) {
      nodes {
        ...PostCard
      }
    }
  }
`
