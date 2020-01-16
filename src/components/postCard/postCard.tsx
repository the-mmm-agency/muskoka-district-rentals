// import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import React, { FC } from 'react'
// import { PostCardFragment } from 'src/graphql-types'

// import Card, { CardContent } from 'elements/card'
// import Heading from 'elements/heading'
// import Link from 'elements/link'
// import Text from 'elements/text'

// const PostCard: FC<PostCardFragment> = ({
//   slug,
//   featured_media,
//   date,
//   title,
//   ...props
// }) => (
//   <Card {...props}>
//     <Img fluid={featured_media?.localFile?.childImageSharp?.fluid} />
//     <CardContent>
//       <Text mb={0}>{date}</Text>
//       <Heading as="h6" mb="auto">
//         {title}
//       </Heading>
//       <Link to={`/blog/${slug}`}>Continue &nbsp;&#10230;</Link>
//     </CardContent>
//   </Card>
// );

// export const query = graphql`
//   fragment PostCard on wordpress__wp_blog_post {
//     featured_media {
//       localFile {
//         childImageSharp {
//           fluid(maxWidth: 500) {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//     }
//     id
//     slug
//     title
//     date(formatString: "MMMM DD, YYYY")
//   }
// `;

// export default PostCard;
