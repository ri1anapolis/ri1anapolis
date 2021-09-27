import React from "react"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/styles/makeStyles"
import Grid from "@material-ui/core/Grid"
import clsx from "clsx"
import { Container } from "@material-ui/core"
import { Link } from "gatsby"

const useStyles = makeStyles({
  hyphenate: {
    wordWrap: "break-word !important",
    overflowWrap: "break-word !important",
    "-webkit-hyphens": "auto",
    "-ms-hyphens": "auto",
    hyphens: "auto",
  },
  backgroundDefault: {
    background: `linear-gradient(45deg, rgba(20,20,20,.8) 0%, rgba(40,40,40,.8) 50%, rgba(20,20,20,.8) 80%), url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23AA7E3D' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
    color: "#FFF",
  },
  box: {
    padding: "50px 0px",
    marginTop: "50px",
  },
  noLink: {
    textDecoration: "none",
  },
})

const VoltarAoSite = () => {
  const classes = useStyles()
  return (
    <Link to="/" className={classes.noLink}>
      <Grid
        container
        component="section"
        className={clsx(classes.backgroundDefault, classes.box)}
      >
        <Container>
          <Typography component="h1" variant="h4">
            Quer mais serviços? Nós temos!
          </Typography>

          <Typography paragraph>
            Clique neste banner e acesse nosso site completo. Nele você pode
            consultar seus protocolos e baixar notas devolutivas, agendar seu
            atendimento presencial no cartório, baixar documentos necessários
            para registros e modelos de requerimentos.
          </Typography>
          <Typography>
            Também tenha acesso ao endereço e aos canais de atendimento do
            cartório, e nos siga nas redes sociais para acompanhar as novidades.
          </Typography>

          <br />
        </Container>
      </Grid>
    </Link>
  )
}

export default VoltarAoSite
