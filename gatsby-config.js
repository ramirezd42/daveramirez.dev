module.exports = {
  siteMetadata: {
    title: `daveramirez.dev`,
    description: `The personal website of Dave Ramirez`,
    author: `Dave Ramirez`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dave Ramirez`,
        short_name: `Dave Ramirez`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#71C592`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
  ],
}
