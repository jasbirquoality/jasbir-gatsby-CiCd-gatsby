/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simple Recipe",
    description: "Site for different recipes",
    author: "Jasbir Singh",
    person: { name: "jasbir", age: 23 },
    simpleData: ["item1", "item2"],
    complexData: [
      { name: "jasbir1", age: 23 },
      { name: "jasbir2", age: 24 },
      { name: "jasbir3", age: 25 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `juo7ybs7gfj3`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata:400",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },
  ],
}
