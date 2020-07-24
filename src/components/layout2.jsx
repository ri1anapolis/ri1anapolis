import React from "react"
import PropTypes from "prop-types"
import { CssBaseline, Grid } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"
import { theme, useStyles } from "../config/materialUiTheme2"
import Loadable from "react-loadable"
import Header from "./header2"
import SectionLoadingFallback from "./sectionLoadingFallback"

const Footer = Loadable({
  loader: () => import("./footer2"),
  loading: SectionLoadingFallback,
  delay: 300,
})
const BackToTopButton = Loadable({
  loader: () => import("./backToTopButton"),
  loading: SectionLoadingFallback,
  delay: 300,
})

const Layout = props => {
  const classes = useStyles(props)
  const topElementId = "home"

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header id={topElementId} />
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
      <BackToTopButton href={topElementId} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
