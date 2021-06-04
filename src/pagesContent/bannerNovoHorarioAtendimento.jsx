import React from "react"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"

const BannerNovoHorarioAtendimento = () => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "350px" }}
    >
      <Container style={{ maxWidth: "900px" }}>
        <Typography variant="subtitle2" align="center">
          <strong>Novo Horário de Atendimento</strong>
        </Typography>
        <Typography variant="caption" align="center" paragraph>
          a partir do dia 22/01/2021
        </Typography>
        <Typography align="justify" paragraph>
          A Corregedoria-Geral da Justiça do Estado de Goiás instituiu no{" "}
          <Link
            href="http://tjdocs.tjgo.jus.br/documentos/580542"
            color="primary"
            rel="noreferrer noopener"
            target="_blank"
          >
            Novo Código de Normas e Procedimentos do Foro Extrajudicial
          </Link>{" "}
          , em seu Art. 90, §1º, que "O horário de atendimento ao público será
          das 9 (nove) às 17 (dezessete) horas, de segunda a sexta-feira, em
          dias úteis, ininterruptamente."
        </Typography>
      </Container>
    </Grid>
  )
}

export default BannerNovoHorarioAtendimento
