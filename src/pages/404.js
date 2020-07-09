import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { CssBaseline } from "@material-ui/core"
import { ThemeProvider, makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import { theme } from "../config/materialUiTheme"
import Header from "../components/header"
import SEO from "../components/seo"

const useStyles = makeStyles(theme => ({
  link: {
    background: "rgba(255,255,255,0)",
    fontSize: "1.2em",
    color: "#fff",
    textDecoration: "none",
    border: "1px solid #fff",
    borderRadius: "7px",
    padding: "10px 20px",
    "&:hover": {
      background: "rgba(255,255,255,0.2)",
    },
  },
}))

const NotFoundPage = () => {
  const classes = useStyles()
  const {
    file: { publicURL: logo },
  } = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo" }, ext: { eq: ".svg" }) {
        publicURL
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <SEO title="404: Not Found" />
      <CssBaseline />
      <Header
        height="100vh"
        id="404"
        logo={logo}
        title="404: Página não encontrada"
        description="A página que você tentou acessar não existe!"
      >
        <Link to="/" replace className={classes.link}>
          VOLTAR À PÁGINA INICIAL
        </Link>
      </Header>
    </ThemeProvider>
  )
}

export default NotFoundPage
