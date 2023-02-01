/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Worldbuilder`,
    description: `Create a world of your very own or find another person to relate too`,
    author: `@EricRudzinski, @JonKoch`, 
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Worldbuilder`,
        short_name: `Worldb`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-firebase',
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyBKOhB3le-qPEXLviITYLSUaKsppZnckEM",
          authDomain: "worldbuilder-29471.firebaseapp.com",
          databaseURL: "https://worldbuilder-29471-default-rtdb.firebaseio.com",
          projectId: "worldbuilder-29471",
          storageBucket: "worldbuilder-29471.appspot.com",
          messagingSenderId: "131872026507",
          appId: "1:131872026507:web:b5903d101f4f90f05bc98e",
          measurementId: "G-8ETMJS1R33"
        }
      },
    },
  ],
}
