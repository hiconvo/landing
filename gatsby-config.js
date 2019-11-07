module.exports = {
  siteMetadata: {
    title: `Convo`,
    description: `Convo makes planning events with your real friends easy.`,
    author: `@AlexanderRichey`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Convo`,
        short_name: `convo`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#24292e`,
        display: `minimal-ui`,
        icon: `src/images/convo-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
