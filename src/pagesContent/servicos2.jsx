import React from "react"
import { Typography, Link } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Button from "../components/styledButton"
import { Article, Section, Aside } from "../components/section2"
import StyledDrawer, {
  useDrawerToggler,
} from "../components/styledDrawerComponent"
import ServicosPanel from "../pagesContent/servicosPanel"

const ServicosSectionContent = () => {
  const handleDrawer = useDrawerToggler()

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

        <Typography paragraph>
          Ao solicitar qualquer tipo de registro e/ou averbação é necessária a
          apresentação de uma série de documentos obrigatórios. Durante a
          análise do processo é possível ainda que seja necessária a
          complementação de documentos.
        </Typography>
        <Typography paragraph>
          Para facilitar e agilizar o processo de identificação e recepção da
          documentação adequada ao processo, o usuário do cartório pode fazer{" "}
          <em>download</em> dos documentos necessários para registro, bem como
          de modelos e requirimentos.
        </Typography>

        <Typography paragraph>
          Também é possível fazer a solicitação de emissão de certidão por
          e-mail! Basta encaminhar sua solicitação para o endereço{" "}
          <Link
            href="mailto:certidaoanapolis@gmail.com"
            rel="noreferrer noopener"
            target="_blank"
            style={{ filter: "brightness(1.3)" }}
          >
            certidaoanapolis@gmail.com
          </Link>
          , ou aqui pelo site, clicando no botão abaixo.
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          onClick={handleDrawer("drawerServicos")}
        >
          Baixar documentos
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={handleDrawer("drawerCertidoes")}
        >
          Solicitar Certidão
        </Button>
      </Section>
      <StyledDrawer id="drawerServicos">
        <ServicosPanel />
      </StyledDrawer>
      <StyledDrawer id="drawerCertidoes" anchor="bottom">
        drawerCertidoes
      </StyledDrawer>
    </Article>
  )
}

export default ServicosSectionContent
