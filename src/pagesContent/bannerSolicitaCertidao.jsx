import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import makeStyles from "@material-ui/styles/makeStyles"
import useTheme from "@material-ui/styles/useTheme"

import AnchorLink from "react-anchor-link-smooth-scroll"

const useStyles = makeStyles(theme => ({
  banner: {
    width: "100%",
    height: "350px",
  },
  bannerTextWrapper: {
    padding: "10px 15px",
  },
}))

const BannerSolicitaCertidao = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.banner}
    >
      <Grid
        item
        container
        xs={12}
        sm={10}
        md={6}
        lg={5}
        xl={4}
        className={classes.bannerTextWrapper}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Typography variant="subtitle2" paragraph align="center">
          <strong>Solicite certidões e buscas online!</strong>
        </Typography>
        <Typography paragraph align="center">
          Acesse a seção de serviços e solicite certidões e buscas online. A
          certidão será enviada unicamente em meio digital.
        </Typography>
        <Button
          component={AnchorLink}
          offset={
            window.matchMedia("(max-width: 959px)").matches &&
            window.matchMedia("(max-height: 959px)").matches
              ? 104
              : 89
          }
          href={
            window.matchMedia("(max-width: 959px)").matches &&
            window.matchMedia("(max-height: 959px)").matches
              ? "#certidoes"
              : "#servicos"
          }
          variant="contained"
          color="primary"
          align="center"
        >
          Solicitar certidões / buscas
        </Button>
      </Grid>
    </Grid>
  )
}

export default BannerSolicitaCertidao
