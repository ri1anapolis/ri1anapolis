const siteUrl =
  process.env.URL || process.env.DEPLOY_URL || `https://ri1anapolis.com.br`

module.exports = {
  siteMetadata: {
    title: `1º RI de Anápolis/GO`,
    description: `Site oficial do Cartório de Registro de Imóveis da Primeira Circunscrição de Anápolis/GO`,
    siteUrl,
    keywords: [
      "cartório",
      "registro",
      "prenotação",
      "averbação",
      "intimação",
      "notificação",
      "busca",
      "loteamento",
      "condomínio",
      "contrato",
      "compra e venda",
      "cédula",
      "financiamento",
      "imóveis",
      "circunscrição",
      "certidão",
      "anápolis",
      "goiás",
    ],
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
        short_name: `1º RI de Anápolis/GO`,
        lang: `pt-BR`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#2e5e9e`,
        cache_busting_mode: "none",
        display: `minimal-ui`,
        icon: `src/images/logo_icon.png`,
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
