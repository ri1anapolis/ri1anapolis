import React from "react"
import { CssBaseline, Grid, Typography, Button } from "@material-ui/core"
import { ThemeProvider, makeStyles, withStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import { theme } from "../config/materialUiTheme2"
import SEO from "../components/seo"
import bg from "../images/bg_repeat.jpg"

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: "rgb(20,20,20)",
    background: `linear-gradient(135deg, rgba(20,20,20,.95) 0%, rgba(40,40,40,.95) 40%, rgba(20,20,20,.95) 80%), url(${bg})`,
    height: "100vh",
    width: "100vw",
    color: "#FFF",
  },
  link: {
    width: "250px",
    marginTop: "30px",
  },
}))

const Button404 = withStyles(
  {
    root: {
      width: "250px",
    },
  },
  { withTheme: theme }
)(Button)

const NotFoundPage = () => {
  const classes = useStyles(theme)

  return (
    <ThemeProvider theme={theme}>
      <SEO title="404: Not Found" />
      <CssBaseline />
      <Grid
        className={classes.wrapper}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{
            maxHeight: "500px",
          }}
        >
          <Typography align="center" variant="h1">
            <strong>404</strong>
          </Typography>
          <Typography align="center" variant="h2">
            Página não encontrada!
          </Typography>
          <Link to="/" replace className={classes.link}>
            <Button404 variant="contained" color="primary">
              Voltar à página inicial
            </Button404>
          </Link>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default NotFoundPage
