import React, { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Tooltip from "@material-ui/core/Tooltip"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import makeStyles from "@material-ui/styles/makeStyles"
import HelpIconButton from "../components/helpIconButton"

import HelpIcon from "@material-ui/icons/Help"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"
import WebIcon from "@material-ui/icons/Web"

import SectionLoadingFallback from "../components/sectionLoadingFallback"
import delay from "../utils/delay"

const iframeId = "iframe-agendamento"
const iframeSrc = "https://ri1anapolis.setmore.com/"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    maxWidth: "500px",
    minWidth: "300px",
    height: "100%",
    overflow: "hidden",
  },
  fallback: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: "-1",
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    zIndex: 10,
  },
  iframeFallback: {
    padding: "20px",
    background: "#f3f3f3",
  },
}))

const AgendamentoPanel = props => {
  const classes = useStyles()
  const [showFallbackMessage, setShowFallbackMessage] = useState("none")
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [timeIsOut, setTimeIsOut] = useState(false)

  const handleOnLoad = () => {
    setIframeLoaded(true)
  }

  const handleError = error => {
    console.error(`Error loading iframe content: ${error}`)
  }

  useEffect(() => {
    async function waitIframe() {
      await delay(6000)
      setTimeIsOut(true)
    }
    !timeIsOut && waitIframe()
  }, [timeIsOut, setTimeIsOut])

  useEffect(() => {
    if (timeIsOut) {
      if (!iframeLoaded) {
        setShowFallbackMessage("flex")
        console.info(
          `The iframe request is taking too much time to finish loading...`
        )
      } else {
        setShowFallbackMessage("none")
        console.info(`The iframe request finished to load.`)
      }
    }
  }, [timeIsOut, iframeLoaded])

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <Container>
          <Typography variant="subtitle1" paragraph>
            Agendamento{" "}
            <Typography variant="subtitle1" component="span" noWrap>
              Online
              <HelpIconButton
                tooltipTitle="Precisa de ajuda?"
                Icon={<HelpIcon />}
                link={{
                  url: "https://ri1anapolis.page.link/ajuda_agendamento_site",
                  text: "Assista um vídeo explicativo",
                }}
              />
            </Typography>
          </Typography>
        </Container>
      </Grid>
      <Grid item style={{ flexGrow: 1, position: "relative" }}>
        <iframe
          className={classes.iframe}
          title={iframeId}
          id={iframeId}
          src={iframeSrc}
          rel="preload"
          frameBorder="0"
          scrolling="no"
          loading="eager"
          onLoad={handleOnLoad}
          onError={handleError}
        >
          <Container justify="center" align="center">
            <Typography paragraph align="center">
              Opa! Parece que seu navegador não suporta esse recurso!
            </Typography>
            <Typography paragraph align="center">
              Faça o agendamento diretamente pelo site do serviço! Bata clicar
              no link abaixo
            </Typography>
            <Link color="primary" href={iframeSrc} rel="noopener noreferrer">
              {iframeSrc}
            </Link>
          </Container>
        </iframe>
        <Container className={classes.fallback}>
          <SectionLoadingFallback text="Conectando-se ao serviço de agendamento..." />
        </Container>
      </Grid>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        align="center"
        className={classes.iframeFallback}
        style={{ display: showFallbackMessage }}
      >
        <Typography paragraph align="center">
          Está com problemas por aqui?
        </Typography>
        <Typography paragraph align="center" variant="caption">
          Tente agendar pelo site do serviço ou pelo nosso WhatsApp!
        </Typography>
        <Grid item container justifyContent="space-around">
          <Link
            href={iframeSrc}
            target="_blank"
            rel="noopener noreferrer"
            color="secondary"
            variant="caption"
          >
            <Tooltip arrow title="Agende pelo site do serviço">
              <WebIcon fontSize="large" />
            </Tooltip>
          </Link>
          <Link
            href="https://wa.me/556239374650"
            target="_blank"
            rel="noopener noreferrer"
            color="secondary"
            variant="caption"
          >
            <Tooltip arrow title="Agende pelo WhatsApp">
              <WhatsAppIcon fontSize="large" />
            </Tooltip>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AgendamentoPanel
