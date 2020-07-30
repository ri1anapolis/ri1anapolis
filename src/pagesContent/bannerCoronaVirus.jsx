import React from "react"
import { Grid, Container, Typography, Link } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
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
          Atendimento durante a pandemia
          <br />
        </Typography>
        <Typography align="center">
          <small>Mudanças nos horários de atendimento</small>
        </Typography>
        <br />
        <Typography align="justify" style={{ fontSize: ".9em" }}>
          A Corregedoria Geral da Justiça do Estado de Goiás determinou, por
          meio da{" "}
          <Link
            href="https://www.tjgo.jus.br/images/docs/corregedoria/PORTARIA_N57_2020.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            Portaria nº 57, de 6 de abril de 2020
          </Link>
          , que os Cartórios Extrajudiciais mantenham atendimento presencial ao
          público das 10h às 16h em todos os dias úteis, com horário previamente
          agendado. Aqui no site você pode consultar seu protocolo online ou
          acessar nossos canais de comunicação!
        </Typography>
      </Container>
    </Grid>
  )
}

export default BannerCoronaVirus
