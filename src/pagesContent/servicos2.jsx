import React from "react"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/styles/makeStyles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Loadable from "react-loadable"

import Button from "../components/styledButton"
import { Article, Section, Aside } from "../components/section2"
import StyledDrawer from "../components/styledDrawerComponent"
import { useDrawerToggler } from "../components/styledDrawerComponent"
import SectionLoadingFallback from "../components/sectionLoadingFallback"

const useStyles = makeStyles({
  hyphenate: {
    wordWrap: "break-word !important",
    overflowWrap: "break-word !important",
    "-webkit-hyphens": "auto",
    "-ms-hyphens": "auto",
    hyphens: "auto",
  },
})

const CertidaoPanel = Loadable({
  loader: () => import("./certidaoPanel"),
  loading: () => <SectionLoadingFallback height="0" />,
  delay: 300,
})
const AgendamentoPanel = Loadable({
  loader: () => import("./agendamentoPanel"),
  loading: () => <SectionLoadingFallback height="0" />,
  delay: 300,
})
const DocumentosPanel2 = Loadable({
  loader: () => import("./documentosPanel2"),
  loading: () => <SectionLoadingFallback height="0" />,
  delay: 300,
})

const ServicosSectionContent = () => {
  const classes = useStyles()
  const handleDrawer = useDrawerToggler()
  CertidaoPanel.preload()
  AgendamentoPanel.preload()
  DocumentosPanel2.preload()

  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "servicos.png" }) {
        childImageSharp {
          fluid(maxWidth: 720, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Article id="servicos" background="true">
      <Aside>
        <Img
          fluid={image.file.childImageSharp.fluid}
          alt="Serviços disponíveis no site: Consulta de protocolos, Agendamento de atendimento e Solicitação de certidões e buscas!"
          style={{ width: "100%" }}
        />
      </Aside>
      <Section>
        <Typography component="h1" variant="h4">
          Serviços
        </Typography>

        <Typography align="left" variant="subtitle2" id="agendamento">
          <strong>Agendamento</strong>
        </Typography>
        <Typography align="left" className={classes.hyphenate}>
          Agendamento de atendimento presencial, entrega ou retirada de
          documentos.
        </Typography>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={handleDrawer("drawerAgendamento")}
        >
          Agendar Online
        </Button>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          rel="noreferrer noopener"
          target="_blank"
          href="https://wa.me/556239374650"
          style={{ filter: "brightness(1.2)" }}
        >
          ou por WhatsApp
        </Button>
        <Typography paragraph />

        <Typography align="left" variant="subtitle2" id="certidoes">
          <strong>Certidões</strong>
        </Typography>
        <Typography align="left" className={classes.hyphenate}>
          Solicite buscas ou emissão de certidões
        </Typography>

        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={handleDrawer("drawerCertidoes")}
        >
          Solicitar Certidão / Busca
        </Button>

        <Typography paragraph />

        <Typography variant="subtitle2" align="left" id="agendamento">
          <strong>Documentos para Registro</strong>
        </Typography>
        <Typography align="left" className={classes.hyphenate}>
          Baixe as listas de documentos necessários para registro, modelos,
          requerimentos e manuais.
        </Typography>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={handleDrawer("drawerDocumentos2")}
        >
          Lista de Documentos
        </Button>
      </Section>

      <StyledDrawer id="drawerCertidoes" anchor="bottom">
        <CertidaoPanel handleDrawer={handleDrawer("drawerCertidoes")} />
      </StyledDrawer>

      <StyledDrawer id="drawerAgendamento">
        <AgendamentoPanel />
      </StyledDrawer>

      <StyledDrawer id="drawerDocumentos2">
        <DocumentosPanel2 />
      </StyledDrawer>
    </Article>
  )
}

export default ServicosSectionContent
