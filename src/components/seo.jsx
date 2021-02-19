/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            preloadDomains
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const canonical = pathname
    ? [
        {
          rel: "canonical",
          href: `${site.siteMetadata.siteUrl}${pathname}`,
        },
      ]
    : []

  const preloadDomains =
    site.siteMetadata?.preloadDomains?.length > 0
      ? site.siteMetadata.preloadDomains.flatMap(href => [
          {
            rel: "preconnect",
            href,
            crossorigin: true,
          },
          {
            rel: "dns-prefetch",
            href,
          },
        ])
      : []

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title} | %s`}
      link={[...canonical, ...preloadDomains]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `viewport`,
          content: `minimum-scale=1, initial-scale=1, width=device-width`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `pt-BR`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string,
}

export default SEO
