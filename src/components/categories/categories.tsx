// import { graphql, useStaticQuery } from 'gatsby';
// import React, { FC } from 'react';

// import { CategoriesQuery } from '../../graphql-types';
// import { Category, Wrapper } from './categories.css';

// import HorizontalScroll from 'components/horizontalScroll';

// const Categories: FC = () => {
//   const {
//     allWordpressWpCategory: { nodes: categories },
//   }: CategoriesQuery = useStaticQuery(graphql`
//     query Categories {
//       allWordpressWpCategory {
//         nodes {
//           id
//           name
//           slug
//         }
//       }
//     }
//   `);
//   return (
//     <Wrapper>
//       <HorizontalScroll>
//         <Category to="/blog">All</Category>
//         {categories.map(category => (
//           <Category key={category.id} to={`/categories/${category.slug}`}>
//             {category.name}
//           </Category>
//         ))}
//       </HorizontalScroll>
//     </Wrapper>
//   );
// };

// export default Categories;
