const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Muskoka District Rentals`,
    description: `MDR offers turn-key cottage rental agency services for owners seeking a trusted partner to safely manage the cottage rental process on their behalf`,
    author: `@brettm12345`,
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-ramda`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        cms: path.join(__dirname, 'src', 'cms'),
        components: path.join(__dirname, 'src', 'components'),
        constants: path.join(__dirname, 'src', 'constants'),
        elements: path.join(__dirname, 'src', 'elements'),
        fonts: path.join(__dirname, 'src', 'fonts'),
        images: path.join(__dirname, 'src', 'images'),
        pages: path.join(__dirname, 'src', 'pages'),
        templates: path.join(__dirname, 'src', 'templates'),
        theme: path.join(__dirname, 'src', 'theme'),
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 90,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Muskoka District Rentals`,
        short_name: `Muskoka`,
        start_url: `/`,
        background_color: `#eaecef`,
        theme_color: `#eaecef`,
        display: `standalone`,
        icon: `src/images/muskoka-icon.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-smartypants`,
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2048,
              quality: 90,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `assets`,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/content/assets`,
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
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#3278b5`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/theme/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`${__dirname}/src/components/layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|.history|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
          formatter: require('eslint-formatter-pretty'),
        },
      },
    },
    {
      resolve: `gatsby-source-apiserver`,
      options: {
        name: `Properties`,
        method: `get`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer LIVE_14875846ee1c2d1ba730e1d06b7c2c48`,
        },
        url: `https://api.myvr.com/v1/properties/?limit=200?active=true`,
        entityLevel: `results`,
        verboseOutput: true,
      },
    },
  ],
}
