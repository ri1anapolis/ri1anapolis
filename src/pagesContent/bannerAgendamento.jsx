import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import useTheme from "@material-ui/styles/useTheme"
import makeStyles from "@material-ui/styles/makeStyles"
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
const BannerWhatsApp = () => {
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
        className={classes.bannerTextWrapper}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Typography variant="subtitle2" paragraph align="center">
          <strong>Agende seu atendimento online!</strong>
        </Typography>
        <Typography paragraph align="center">
          Evite filas e tenha um atendimento agilizado. Agendando seu
          atendimento aqui pelo site você economiza tempo e evita aglomerações.
        </Typography>
        <Button
          component={AnchorLink}
          offset={
            useMediaQuery("(max-width: 959px)").matches &&
            window.matchMedia("(max-height: 959px)").matches
              ? 104
              : 89
          }
          href={
            window.matchMedia("(max-width: 959px)").matches &&
            window.matchMedia("(max-height: 959px)").matches
              ? "#agendamento"
              : "#servicos"
          }
          variant="contained"
          color="primary"
          align="center"
        >
          Agende seu atendimento
        </Button>
      </Grid>
    </Grid>
  )
}

export default BannerWhatsApp
