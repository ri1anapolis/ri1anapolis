import React from "react"
import { Grid, Container, Typography } from "@material-ui/core"
import { useTheme, makeStyles } from "@material-ui/styles"
import SectionLoadingFallback from "../components/sectionLoadingFallback"

const iframeId = "iframe-agendamento"
const iframeSrc =
  "https://my.setmore.com/bookanappointmentv3.do?uniqueKey=31973490-0c3c-475e-97a4-98a98cbc81bb"

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
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
}))

const AgendamentoPanel = props => {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <Container>
          <Typography variant="subtitle1" paragraph>
            Agendamento Online
          </Typography>
        </Container>
      </Grid>
      <Grid item style={{ flexGrow: 1, position: "relative" }}>
        <Container className={classes.fallback}>
          <SectionLoadingFallback text="Conectando-se ao serviço de agendamento..." />
        </Container>
        <iframe
          className={classes.iframe}
          title={iframeId}
          id={iframeId}
          src={iframeSrc}
          rel="preload"
          frameBorder="0"
          scrolling="no"
          loading="eager"
        >
          teste
        </iframe>
      </Grid>
    </Grid>
  )
}

export default AgendamentoPanel
