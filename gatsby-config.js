/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `YulaWebPage`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-env-variables",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: process.env.GATSBY_API_URL,
        dbName: `projects`,
        collection: `work`,
        server: {
          address: "ac-4bdar2d-shard-00-02.ypklcwn.mongodb.net",
          port: 27017,
        },
      },
    },
  ],
};
