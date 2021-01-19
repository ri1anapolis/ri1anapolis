require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl =
  process.env.URL || process.env.DEPLOY_URL || process.env.SITE_URL
const googleTrackingId = process.env.GOOGLE_TRACKING_ID

module.exports = {
  siteMetadata: {
    title: `1º Registro de Imóveis de Anápolis/GO`,
    description: `Consulte o andamento do seu protocolo, solicite certidões, agende seu atendimento! Agora você tem todos esses serviços disponíveis online no site! Acompanhe o andamento do seu protocolo online e entenda o processo de registro/averbação! Sua certidão pronta em até 20 minutos*! Solicite sua certidão pelo site ou e-mail! Agende seu atendimento online no site ou por WhatsApp e evite filas e aglomerações! O Cartório de Registro de Imóveis da Primeira Circunscrição fica localizado dentro do Anashopping, em Anápolis - GO.`,
    siteUrl,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cartório de Registro de Imóveis da Primeira Circunscrição de Anápolis/GO`,
        short_name: `1º Registro de Imóveis de Anápolis/GO`,
        lang: `pt-BR`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#c59543`,
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
    `gatsby-plugin-loadable-components-ssr`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
  ],
}
