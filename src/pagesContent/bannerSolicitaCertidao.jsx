import React from "react"
import { Grid, Typography, Button, Link } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/styles"
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
        className={classes.bannerTextWrapper}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Typography variant="subtitle2" paragraph align="center">
          <strong>Solicite sua certidão por e-mail ou pelo site!</strong>
        </Typography>
        <Typography align="center">
          Solicite certidões e/ou buscas diretamente por email ou aqui no site!
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
          </Link>
          , ou clicar no botão abaixo!
        </Typography>
        <AnchorLink
          offset="89"
          href="#servicos"
          style={{ textDecoration: "none", outline: "none" }}
        >
          <Button
            variant="contained"
            color="primary"
            style={{ textAlign: "center" }}
          >
            Clique para solicitar sua certidão
          </Button>
        </AnchorLink>
      </Grid>
    </Grid>
  )
}

export default BannerWhatsApp
