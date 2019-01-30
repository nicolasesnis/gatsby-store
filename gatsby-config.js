require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Zazou Paris',
    author: 'Nicolas Esnis',
    description:
      'Boutique en ligne Zazou-Paris de bijoux personnalisés faits à la main',
    siteUrl: 'https://www.zazou-paris.com',
  },
  pathPrefix: '/gatsby-starter-ecommerce',
  plugins: [
    {
      resolve: 'gatsby-source-moltin',
      options: {
        key: process.env.GATSBY_MOLTIN_CLIENT_ID,
        products: ['main_image', 'brands', 'files', 'categories'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-133452669-1`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
        anonymize: true,
        respectDNT: true,

      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby Shop App',
        short_name: 'Shop App',
        start_url: '/gatsby-starter-ecommerce/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
