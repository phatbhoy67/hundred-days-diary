module.exports = {
  siteMetadata: {
    title: `100 Days of Code Diary`
  },
  pathPrefix: `/hundred-days-diary`,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "100 Days of Code Diary",
        short_name: "100DOC",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "minimal-ui",
        icon: "src/images/icon.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`
  ]
};
