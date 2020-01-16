// import { graphql } from 'gatsby';
// import React from 'react';

// import BlogTemplate from 'templates/blog';

// const Category = ({ data, pageContext: { name, slug } }) => (
//   <BlogTemplate
//     data={data}
//     title={name}
//     crumbs={[{ title: name, link: slug }]}
//   />
// );

// export const query = graphql`
//   query CategoryPage($id: String!) {
//     allWordpressWpBlogPost(
//       sort: { fields: date, order: DESC }
//       filter: { category: { id: { eq: $id } } }
//     ) {
//       nodes {
//         ...PostCard
//       }
//     }
//   }
// `;

// export default Category;
