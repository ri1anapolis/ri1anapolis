import React from "react"
import { Typography, Link } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Loadable from "react-loadable"

import Button from "../components/styledButton"
import { Article, Section, Aside } from "../components/section2"
import StyledDrawer, {
  useDrawerToggler,
} from "../components/styledDrawerComponent"
import SectionLoadingFallback from "../components/sectionLoadingFallback"

const CertidaoPanel = Loadable({
  loader: () => import("../pagesContent/certidaoPanel"),
  loading: () => <SectionLoadingFallback height="0" />,
  delay: 300,
})
const AgendamentoPanel = Loadable({
  loader: () => import("../pagesContent/agendamentoPanel"),
  loading: () => <SectionLoadingFallback height="0" />,
  delay: 300,
})

const ServicosSectionContent = () => {
  const handleDrawer = useDrawerToggler()
  CertidaoPanel.preload()
  AgendamentoPanel.preload()

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

        <Typography variant="subtitle2" id="agendamento">
          <strong>Agendamento</strong>
        </Typography>
        <Typography paragraph>
          Evite filas e imprevistos. Agende sua visita ou atendimento online,
          aqui no site, ou pelo WhatsApp!
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

        <Typography variant="subtitle2" id="certidoes">
          <strong>Certidões</strong>
        </Typography>
        <Typography paragraph>
          Solicite buscas ou emissão de certidões clicando no botão abaixo, ou
          encaminhe suas solicitações por email, no endereço{" "}
          <Link
            href="mailto:certidaoanapolis@gmail.com"
            rel="noreferrer noopener"
            target="_blank"
            style={{ filter: "brightness(1.3)" }}
          >
            certidaoanapolis@gmail.com
          </Link>
          .
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={handleDrawer("drawerCertidoes")}
        >
          Solicitar Certidão
        </Button>
      </Section>

      <StyledDrawer id="drawerCertidoes" anchor="bottom">
        <CertidaoPanel handleDrawer={handleDrawer("drawerCertidoes")} />
      </StyledDrawer>

      <StyledDrawer id="drawerAgendamento">
        <AgendamentoPanel />
      </StyledDrawer>
    </Article>
  )
}

export default ServicosSectionContent
