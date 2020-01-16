const path = require('path');

const siteMetadata = require('./siteMetadata');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata,
  plugins: [
    // Build Plugins
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src', 'components'),
        elements: path.join(__dirname, 'src', 'elements'),
        images: path.join(__dirname, 'src', 'images'),
        hooks: path.join(__dirname, 'src', 'hooks'),
        pages: path.join(__dirname, 'src', 'pages'),
        styles: path.join(__dirname, 'src', 'styles'),
        templates: path.join(__dirname, 'src', 'templates'),
        theme: path.join(__dirname, 'src', 'theme'),
        util: path.join(__dirname, 'src', 'util'),
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    // {
    //   resolve: 'gatsby-plugin-eslint',
    //   options: {
    //     test: /\.js$|\.jsx$/,
    //     exclude: /(node_modules|.cache|.history|public)/,
    //     stages: ['develop'],
    //     options: {
    //       emitWarning: true,
    //       failOnError: false,
    //       formatter: require('eslint-formatter-pretty'),
    //     },
    //   },
    // },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        instances: ['@xstyled/emotion'],
      },
    },
    'gatsby-plugin-polished',
    'gatsby-plugin-remove-console',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              wrapperStyle: 'margin-left: none;',
              disableBgImage: true,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              ratio: 1.77,
              related: false,
              noIframeBorder: true,
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ],
            },
          },
        ],
      },
    },
    // Styling and site config
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#3278b5',
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: siteMetadata.manifest,
    },
    'gatsby-plugin-fastclick',

    // Transformers
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 100,
      },
    },

    // Sources
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },

    // Deployment
    'gatsby-plugin-preload-link-crossorigin',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: [
          'Link: /Didot-Bold.woff2; rel=preload; as=font; type=font/woff2',
          'Link: /Raleway-Regular.woff2; rel=preload; as=font; type=font/woff2',
          'Link: /Raleway-Bold.woff2; rel=preload; as=font; type=font/woff2',
          'Link: /Raleway-Medium.woff2; rel=preload; as=font; type=font/woff2',
          'Link: /Raleway-SemiBold.woff2; rel=prefetch; as=font; type=font/woff2',
          'Link: /Didot-Regular.woff2; rel=prefetch; as=font; type=font/woff2',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-functions',
      options: {
        functionsSrc: `${__dirname}/src/lambda`,
        functionsOutput: `${__dirname}/functions`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-graphql-codegen',
    //   options: {
    //     fileName: 'src/graphql-types.ts',
    //     codegen: true,
    //     codegenDelay: 250,
    //   },
    // },
  ],
};
