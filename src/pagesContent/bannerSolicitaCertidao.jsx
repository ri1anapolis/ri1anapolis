import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Link from "@material-ui/core/Link"
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
        className={classes.bannerTextWrapper}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Typography variant="subtitle2" paragraph align="center">
          <strong>Solicite sua certidão por e-mail ou pelo site!</strong>
        </Typography>
        <Typography align="center">
          Solicite certidões e/ou buscas diretamente por e-mail ou aqui no site.
        </Typography>
        <Typography paragraph align="center">
          Basta remeter sua solicitação para o email{" "}
          <Link
            href="mailto:certidaoanapolis@gmail.com"
            rel="noreferrer noopener"
            target="_blank"
            style={{ filter: "brightness(1.3)" }}
          >
            certidaoanapolis@gmail.com
          </Link>{" "}
          ou clicar no botão abaixo.
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
          Solicite sua certidão / busca
        </Button>
      </Grid>
    </Grid>
  )
}

export default BannerSolicitaCertidao
