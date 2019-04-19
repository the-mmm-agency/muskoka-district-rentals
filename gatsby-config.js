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
        components: `${__dirname}/src/components`,
        images: `${__dirname}/src/images`,
        pages: `${__dirname}/src/pages`,
        theme: `${__dirname}/src/theme`,
        utils: `${__dirname}/src/utils`,
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
    `gatsby-plugin-styled-components`,
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
    `gatsby-plugin-nprogress`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
