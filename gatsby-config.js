module.exports = {
  siteMetadata: {
    title: `Carrera Management Corporation`,
    description: `Residential Property Management and Lettings in Vancouver.`,
    author: `@jamesbrown5292`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: '#305488',
        theme_color: `#305488`,
        display: `minimal-ui`,
        icon: `static/images/cmc-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `property`,
        path: `${__dirname}/pages/property`,
      }
    },
    `gatsby-transformer-remark`,
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
