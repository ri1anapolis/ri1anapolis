import React from "react"

import Container from "@material-ui/core/Container"
import Popover from "@material-ui/core/Popover"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline"
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline"

import useStyles from "./styles"

const StyledPopover = props => {
  const classes = useStyles()
  const { open, sendingStatus, anchorEl, handleClose } = props

  return (
    <Popover
      open={open}
      onClose={handleClose}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "center", horizontal: "center" }}
      transformOrigin={{ vertical: "center", horizontal: "center" }}
      disableRestoreFocus
    >
      {sendingStatus === "loading" && (
        <Container
          className={classes.popoverStatus}
          justify="center"
          align="center"
        >
          <CircularProgress />
          <Typography align="center">Enviando sua solicitação...</Typography>
        </Container>
      )}
      {sendingStatus === "success" && (
        <Container
          className={classes.popoverStatus}
          justify="center"
          align="center"
        >
          <CheckCircleOutlineIcon
            size="large"
            style={{ color: "green", fontSize: 50 }}
          />
          <Typography paragraph align="center" variant="subtitle2">
            Solicitação realizada com sucesso!
          </Typography>
          <Typography align="center">
            Agora é só aguardar que nossa equipe entrará em contato com você
            para finalizar seu pedido!
          </Typography>
        </Container>
      )}
      {sendingStatus === "fail" && (
        <Container
          className={classes.popoverStatus}
          justify="center"
          align="center"
        >
          <ErrorOutlineIcon
            size="large"
            style={{ color: "red", fontSize: 50 }}
          />
          <Typography paragraph align="center" variant="subtitle2">
            Houve um erro ao submeter sua solicitação!
          </Typography>
          <Typography align="center">
            Mas não desista ainda! Você também pode fazer sua solicitação por
            e-mail! Basta enviar seu pedido para{" "}
            <Link
              href="mailto:certidaoanapolis@gmail.com"
              rel="noreferrer noopener"
              target="_blank"
              style={{ filter: "brightness(.7)" }}
              onClick={handleClose}
            >
              certidaoanapolis@gmail.com
            </Link>
          </Typography>
        </Container>
      )}
    </Popover>
  )
}

export default StyledPopover
