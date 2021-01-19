import React from "react"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import makeStyles from "@material-ui/styles/makeStyles"
import AnchorLink from "react-anchor-link-smooth-scroll"
import coronaImg from "../images/coronavirus_bg_2_opt.svg"

const useStyles = makeStyles({
  banner: {
    width: "100%",
    height: "350px",
    background: `url('${coronaImg}')`,
    backgroundSize: "cover",
  },
  text: {
    maxWidth: "900px",
  },
})
const BannerCoronaVirus = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.banner}
    >
      <Container className={classes.text}>
        <Typography variant="subtitle2" align="center">
          <strong>Atendimento durante a pandemia</strong>
        </Typography>
        <Typography paragraph align="center">
          <small>Atendimento agendado</small>
        </Typography>
        <Typography align="justify">
          Por força das Portarias nº 57/2020 e nº 76/2020, a CGJ/GO determinou
          que os cartórios realizem o atendimento presencial ao público com
          horário previamente agendado.{" "}
          <Link
            component={AnchorLink}
            href="#agendamento"
            offset="104"
            color="primary"
          >
            Agende seu atendimento no site ou pelo WhatsApp
          </Link>{" "}
          e evite aglomerações.
        </Typography>
      </Container>
    </Grid>
  )
}

export default BannerCoronaVirus
