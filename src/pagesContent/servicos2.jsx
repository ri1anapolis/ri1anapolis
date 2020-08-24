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

// const ServicosPanel = Loadable({
//   loader: () => import("../pagesContent/servicosPanel"),
//   loading: () => <SectionLoadingFallback height="0" />,
//   delay: 300,
// })
const CertidaoPanel = Loadable({
  loader: () => import("../pagesContent/certidaoPanel"),
  loading: () => <SectionLoadingFallback height="0" />,
  delay: 300,
})

const ServicosSectionContent = () => {
  const handleDrawer = useDrawerToggler()
  // ServicosPanel.preload()
  CertidaoPanel.preload()

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
          alt="Serviços"
          style={{ width: "100%" }}
        />
      </Aside>
      <Section>
        <Typography component="h1" variant="h4">
          Serviços
        </Typography>

        <Typography>
          Ao solicitar qualquer tipo de registro e/ou averbação é necessária a
          apresentação de uma série de documentos obrigatórios. Durante a
          análise do processo é possível ainda que seja necessária a
          complementação de documentos.
        </Typography>
        <Typography paragraph>
          Em breve, nessa seção, será possível consultar e baixar os documentos
          necessários para registro, bem como modelos de requerimentos e outros
          tipos de documentos.
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

        {/* <Button
          variant="contained"
          color="secondary"
          onClick={handleDrawer("drawerServicos")}
        >
          Baixar documentos
        </Button> */}

        <Button
          variant="contained"
          color="primary"
          onClick={handleDrawer("drawerCertidoes")}
        >
          Solicitar Certidão
        </Button>
      </Section>
      {/* <StyledDrawer id="drawerServicos">
        <ServicosPanel />
      </StyledDrawer> */}
      <StyledDrawer id="drawerCertidoes" anchor="bottom">
        <CertidaoPanel handleDrawer={handleDrawer("drawerCertidoes")} />
      </StyledDrawer>
    </Article>
  )
}

export default ServicosSectionContent
