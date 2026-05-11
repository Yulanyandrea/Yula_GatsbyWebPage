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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "13053297524",
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "https://yulany-andrea.netlify.app/",
        // defaults to false
        enableWebVitalsTracking: true,
      },
    },
  ],
};

export default config;
