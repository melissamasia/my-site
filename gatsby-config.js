module.exports = {
  siteMetadata: {
    title: `Melissa Masia`,
    description: `Melissa Masia's personal website`,
    author: `Melissa Masia`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `melissa-personal-website`,
        lang: 'en',
        short_name: `my-site`,
        start_url: `/`,
        display: `standalone`,
        icon: `${__dirname}/src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    `gatsby-plugin-typescript`,
  ],
}
