import React from "react"
import PropTypes from "prop-types"
import LiteHeader from "./header/liteHeader"
import CssBaseline from "@material-ui/core/CssBaseline"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import { theme, useStyles } from "../config/materialUiTheme2"
import { Grid } from "@material-ui/core"
import clsx from "clsx"
import { makeStyles } from "@material-ui/styles"
import Footer from "../components/footer2"

const useLocalStyles = makeStyles(theme => ({
  standAlone: {
    paddingTop: "50px",
    paddingBottom: "0px",
  },
}))

const LayoutLite = props => {
  const rootClasses = useStyles(props)
  const classes = useLocalStyles(theme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LiteHeader />
      <Grid className={clsx(rootClasses.root, classes.standAlone)}>
        {props.children}
      </Grid>
      <Footer />
    </ThemeProvider>
  )
}

LayoutLite.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutLite
