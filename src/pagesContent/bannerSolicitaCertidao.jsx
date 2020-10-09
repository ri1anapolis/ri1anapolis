import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Fab from "@material-ui/core/Fab"
import AnchorLink from "react-anchor-link-smooth-scroll"

import makeStyles from "@material-ui/styles/makeStyles"
import useTheme from "@material-ui/styles/useTheme"

import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded"

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
        className={classes.bannerTextWrapper}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Typography variant="h5" paragraph align="center">
          <strong>Certidão Online</strong>
        </Typography>
        <Typography variant="subtitle2" paragraph align="center">
          <strong>
            Faça seus pedidos online aqui no site e receba as certidões e buscas
            em meio digital
          </strong>
        </Typography>
        <Typography paragraph />
        <Typography paragraph variant="caption" align="center">
          Clique no botão abaixo
        </Typography>
        <Fab
          color="primary"
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
        >
          <ArrowDownwardRoundedIcon fontSize="large" />
        </Fab>
        {/* <Button
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
          Solicite sua certidão / busca
        </Button> */}
      </Grid>
    </Grid>
  )
}

export default BannerSolicitaCertidao
