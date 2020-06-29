module.exports = {
  siteMetadata: {
    title: `Cartório de Registro de Imóveis da Primeira Circunscrição de Anápolis/GO`,
    description: `Site oficial do Cartório de Registro de Imóveis da Primeira Circunscrição de Anápolis/GO`,
    author: `André Martins`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cartório de Registro de Imóveis da Primeira Circunscrição de Anápolis/GO`,
        short_name: `1º RI de Anápolis`,
        lang: `pt-BR`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        cache_busting_mode: "none",
        display: `minimal-ui`,
        icon: `src/images/logo_icon.svg`,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/*"],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
