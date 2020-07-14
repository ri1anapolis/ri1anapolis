require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl =
  process.env.URL || process.env.DEPLOY_URL || process.env.SITE_URL
const googleTrackingId = process.env.GOOGLE_TRACKING_ID

module.exports = {
  siteMetadata: {
    title: `1º Registro de Imóveis de Anápolis/GO`,
    description: `Consulte o andamento do seu pedido de registro ou certidão online! Basta informar o número do protocolo e buscar! Acesse nosso site e entenda como funciona o fluxo de trabalho no 1º RI! O Cartório de Registro de Imóveis da Primeira Circunscrição fica localizado dentro do Anashopping, em Anápolis - GO.`,
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
        short_name: `1º Registro de Imóveis de Anápolis/GO`,
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
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: googleTrackingId,
        head: false,
        anonymize: true,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
  ],
}
