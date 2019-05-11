module.exports = {
  siteMetadata: {
    title: `Muskoka District Rentals`,
    description: `A booking pwa for Muskoka District Rentals`,
    author: `@brettm12345`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        constants: `${__dirname}/src/constants`,
        components: `${__dirname}/src/components`,
        images: `${__dirname}/src/images`,
        pages: `${__dirname}/src/pages`,
        theme: `${__dirname}/src/theme`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
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
    'gatsby-transformer-json',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-brotli`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pure: true,
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
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
    `gatsby-plugin-transition-link`,
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
  ],
}
