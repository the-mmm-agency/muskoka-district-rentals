const path = require('path');

exports.onCreateWebpackConfig = ({ _, actions }) => {
  actions.setWebpackConfig({
    devtool: 'eval-source-map',
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            body
            frontmatter {
              slug
              title
              hideTitle
              contactForm
              hero {
                childImageSharp {
                  fluid(maxWidth: 4096) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  result.data.allMdx.edges.forEach(
    ({
      node: {
        frontmatter: { slug, title, hero, hideTitle, contactForm },
        body,
      },
    }) => {
      createPage({
        path: slug,
        component: path.resolve('./src/templates/page.tsx'),
        context: { title, hero, body, hideTitle, contactForm },
      });
    }
  );
};
