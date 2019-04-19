const path = require('path')

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
        root: path.join(__dirname, `src`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Muskoka District Rentals`,
        short_name: `Muskoka`,
        start_url: `/`,
        background_color: `#eaecef`,
        theme_color: `#eaecef`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-nprogress`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigFile: `src/utils/typography`,
      },
    },
  ],
}
