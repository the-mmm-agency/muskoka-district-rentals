const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Muskoka District Rentals`,
    description: `MDR offers turn-key cottage rental agency services for owners seeking a trusted partner to safely manage the cottage rental process on their behalf`,
    author: `@brettm12345`,
    footerLinks: [
      ['/site-map', '/terms-and-conditions', '/privacy-policy', '/help'],
      ['/our-rentals', '/guest-concierge', '/about', '/contact'],
      ['/faqs', '/blog', '/our-blog', '/press'],
    ],
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
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
    `gatsby-transformer-sharp`,
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
    `gatsby-plugin-emotion`,
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
        layout: require.resolve(`./src/components/layout.js`),
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
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'https://muskokadis.wpengine.com',
        protocol: 'https',
        useACF: true,
        acfOptionPageIds: [],
        auth: {
          jwt_user: 'muskokadis',
          jwt_pass: '123',
          jwt_base_path: '/jwt-auth/v1/token',
        },
        verboseOutput: false,
        concurrentRequests: 10,
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
        normalizer: function({ entities }) {
          const suitability = entities.filter(
            e => e.__type === `wordpress__wp_mphb_ra_suitability`
          )
          const categories = entities.filter(
            e => e.__type === `wordpress__wp_mphb_room_type_category`
          )
          const amenities = entities.filter(
            e => e.__type === `wordpress__wp_mphb_room_type_facility`
          )
          const media = entities.filter(e => e.__type === `wordpress__wp_media`)
          const rates = entities.filter(
            e => e.__type === `wordpress__wp_mphb_rate`
          )
          return entities.map(e => {
            if (e.__type === `wordpress__wp_mphb_room_type`) {
              e.categories___NODE = e.mphb_room_type_category.map(
                c => categories.find(gObj => c === gObj.wordpress_id).id
              )
              e.amenities___NODE = e.mphb_room_type_facility.map(
                c => amenities.find(gObj => c === gObj.wordpress_id).id
              )
              e.suitability___NODE = e.mphb_ra_suitability.map(
                c => suitability.find(gObj => c === gObj.wordpress_id).id
              )
              e.images___NODE = e.gallery
                .split(',')
                .map(
                  c => media.find(gObj => c === gObj.wordpress_id.toString()).id
                )
              e.lowestRate = rates.find(
                gObj => e.wordpress_id.toString() === gObj.mphb_room_type_id
              ).mphb_season_prices[0].price.prices[0]
              delete e.mphb_room_type_facility
              delete e.mphb_room_type_category
              delete e.mphb_ra_suitability
              delete e.gallery
            }
            return e
          })
        },
      },
    },
  ],
}
