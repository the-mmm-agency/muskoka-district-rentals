// import styled from '@xstyled/emotion'
// import React, { FC } from 'react'
// import { PostCardFragment } from 'src/graphql-types'

// import Crumbs, { Breadcrumb } from 'components/breadcrumb'
// import Categories from 'components/categories'
// import PostCard from 'components/postCard'
// import Flex from 'elements/flex'
// import Grid from 'elements/grid'
// import Heading from 'elements/heading'
// import { down } from 'theme/media'

// const PostGrid = styled(Grid)`
//   ${down('sm')} {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
//   ${down('md')} {
//     grid-template-columns: 1fr 1fr;
//     grid-column-gap: 1.2rem;
//     padding-right: 2;
//   }
//   grid-template-columns: 1fr 1fr 1fr;
//   grid-column-gap: 2.4rem;
// `;

// interface BlogProps {
//   crumbs?: Breadcrumb[];
//   title: string;
//   data: {
//     allWordpressWpBlogPost: { nodes: PostCardFragment[] };
//   };
// }

// const Blog: FC<BlogProps> = ({
//   data: {
//     allWordpressWpBlogPost: { nodes: posts },
//   },
//   crumbs = [],
//   title,
// }) => (
//   <>
//     <Flex
//       flexDirection="column"
//       py={5}
//       px={{ sm: 2, md: 3, lg: 4, xl: 5 }}
//       backgroundColor="backgroundDefault"
//       justifyContent="center"
//     >
//       <Flex alignItems="center" width="100%" flexDirection="column">
//         <Heading as="h1" textAlign="center" mb={1} fontSize={2}>
//           {title}
//         </Heading>
//         <Crumbs
//           mb={4}
//           crumbs={[
//             {
//               link: '/',
//               title: 'Home',
//             },
//             {
//               link: '/blog',
//               title: 'Blog',
//             },
//             ...crumbs,
//           ]}
//         />
//       </Flex>
//       <Categories />
//       <PostGrid py={2} px={{ sm: 1, md: 4, lg: 5, xl: 6 }}>
//         {posts.map(
//           post =>
//             post.featured_media && (
//               <PostCard
//                 key={post.id}
//                 {...post}
//                 css={{ minWidth: '100% !important' }}
//               />
//             )
//         )}
//       </PostGrid>
//     </Flex>
//   </>
// );

// export default Blog;
