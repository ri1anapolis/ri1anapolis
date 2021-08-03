import React from "react"

import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Accordion from "../../components/simpleAccordion"
import HelpIconButton from "../../components/helpIconButton"
import HelpIcon from "@material-ui/icons/Help"

import useStyles from "./styles"

import documentos from "./documentosPanelContent"

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
          Documentos para{" "}
          <Typography variant="subtitle1" component="span" noWrap>
            Registro
            <HelpIconButton
              ariaLabel="Precisa de ajuda?"
              tooltipTitle="Precisa de ajuda?"
              Icon={<HelpIcon />}
              link={{
                url: "https://ri1anapolis.page.link/ajuda_documentos_site",
                text: "Assista um vídeo explicativo",
              }}
            />
          </Typography>
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
