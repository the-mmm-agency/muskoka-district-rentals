const path = require('path')

const siteMetadata = require('./siteMetadata')
const normalizeWordpress = require('./normalizeWordpress')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata,
  plugins: [
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/theme/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/components/layout.js`),
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: `mdr`,
        start_url: `/`,
        background_color: `#eaecef`,
        theme_color: `#eaecef`,
        display: `standalone`,
        icon: `src/images/muskoka-icon.png`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 90,
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
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'https://muskokadis.wpengine.com',
        protocol: 'https',
        useACF: true,
        auth: {
          jwt_user: 'muskokadis',
          jwt_pass: '123',
          jwt_base_path: '/jwt-auth/v1/token',
        },
        includedRoutes: [
          '**/categories',
          '**/tags',
          '**/posts',
          '**/guest_services',
          '**/pages',
          '**/media',
          '**/mphb_booking',
          '**/mphb_room_attribute',
          '**/mphb_season',
          '**/mphb_rate',
          '**/mphb_room_service',
          '**/mphb_payment',
          '**/mphb_reserved_room',
          '**/mphb_room_type_category',
          '**/mphb_room_type_tag',
          '**/mphb_room_type_facility',
          '**/mphb_ra_suitability',
          '**/mphb_room_type',
        ],
        normalizer: normalizeWordpress,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
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
  ],
}
