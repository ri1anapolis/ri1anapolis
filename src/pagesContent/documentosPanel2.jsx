import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import makeStyles from "@material-ui/styles/makeStyles"

import Accordion from "../components/simpleAccordion"
import documentos from "./documentosPanelContent"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    maxWidth: "500px",
    minWidth: "300px",
    height: "100%",
    overflow: "hidden",
    flexFlow: "column",
    "& > div": {
      overflowX: "hidden",
      scrollbarWidth: "thin",
      "&::-webkit-scrollbar": {
        width: "6px",
        height: "6px",
        backgroundColor: "#F5F5F5",
        overflowX: "auto",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,.3)",
        backgroundColor: "#f0f0f0",
        overflowX: "auto",
      },
    },
  },
  list: {
    height: "100%",
    overflowX: "hidden",
    marginBottom: "10px",
    overscrollBehavior: "none",
    overscrollBehaviorBlock: "none",
    "&> div:last-child": {
      marginBottom: "50px !important",
    },
  },
}))

const DocumentosPanel = () => {
  const classes = useStyles()

  const documentsList = documentos.map((document, index) => {
    const { title, description, links } = document

    return (
      <Accordion
        key={index}
        title={title}
        description={description}
        links={links}
      />
    )
  })

  return (
    <Grid container className={classes.root}>
      <Container style={{ flexShrink: 0 }}>
        <Typography variant="subtitle1" paragraph>
          Documentos para Registro
        </Typography>
        <Typography paragraph variant="caption">
          Lista de documentos necessários para registro, modelos, manuais e
          requerimentos
        </Typography>
      </Container>
      <Container className={classes.list}>{documentsList}</Container>
    </Grid>
  )
}

export default DocumentosPanel
