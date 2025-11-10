import type { GatsbyConfig } from "gatsby";
import * as dotenv from "dotenv"; // Importar dotenv

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
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
        path: "./public/images",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: process.env.GATSBY_API_URL,
        dbName: `projects`,
        collection: `work`,
      },
    },
  ],
};

export default config;
