import React from "react"
import Typography from "@material-ui/core/Typography"
import AnchorLink from "react-anchor-link-smooth-scroll"

import StyledAlertComponent from "../../styledAlertComponent"

import styles from "./styles"

const HandleErrors = ({ error }) => {
  const classes = styles()

  if (!error) return

  const { networkError } = error

  if (networkError?.length > 0) {
    return (
      <StyledAlertComponent severity="error" title="Erro de conexão">
        <Typography paragraph className={classes.hyphenate}>
          Uma falha na conexão de rede impediu que sua consulta fosse realizada.
        </Typography>
        <Typography className={classes.hyphenate}>
          Verifique se sua conexão com a internet está ativa ou se há algum
          firewall bloqueando a conexão.
        </Typography>
      </StyledAlertComponent>
    )
  }

  return (
    <StyledAlertComponent severity="error" title="Erro de sistema">
      <Typography paragraph className={classes.hyphenate}>
        Uma falha de sistema ocorreu. Tente novamente mais tarde.
      </Typography>
      <Typography className={classes.hyphenate}>
        Caso já tenha visto essa mensagem anteriormente,{" "}
        <AnchorLink href="#contato" offset="89" style={{ color: "#611A15" }}>
          entre em contato
        </AnchorLink>{" "}
        e nos informe!
      </Typography>
    </StyledAlertComponent>
  )
}

export default HandleErrors
