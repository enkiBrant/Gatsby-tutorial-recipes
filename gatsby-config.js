/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipes site",
    author: "@enki",
    person: { name: "Enki", age: 46 },
    simpleData: ["item", "item2"],
    complexData: [
      { name: "Enki", age: 46 },
      { name: "Susan", age: 26 },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `tfq444dt5tcv`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
