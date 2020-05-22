import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { CssBaseline, Grid } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"

import { theme, useStyles } from "../config/materialUiTheme"
import Header from "./header"
import Footer from "./footer"

const Layout = props => {
  const classes = useStyles(props)
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
      <CssBaseline />
      <Header
        logo={logo}
        title={
          <>
            1º Registro de Imóveis
            <br />
            de Anápolis/GO
          </>
        }
        description={
          <>
            Segurança para garantir seu direito,
            <br />
            qualidade e agilidade para poupar seu tempo.
          </>
        }
        links={[
          { href: "#protocolos", text: "PROTOCOLOS" },
          { href: "#servicos", text: "SERVIÇOS" },
          { href: "#cartorio", text: "O CARTÓRIO" },
          { href: "#contato", text: "CONTATO" },
        ]}
      />

      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        className={classes.root}
      >
        {props.children}
      </Grid>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
