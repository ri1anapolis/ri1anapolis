import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Article, Section, Aside } from "../components/section"
import { Typography } from "@material-ui/core"
import StyledSearchField from "../components/searchProtocol"

const ProtocolosSectionContent = () => {
  const image = useStaticQuery(graphql`
    query {
      file(name: { regex: "/about/" }) {
        publicURL
      }
    }
  `)

  return (
    <Article id="protocolos">
      <Section>
        <Typography component="h1" variant="h4">
          Protocolos
        </Typography>
        <br />

        <p>
          Acompanhe o andamento do seu processo! Informe no campo abaixo o
          número do protocolo presente em seu recibo e faça uma busca.
        </p>

        <StyledSearchField
          id="protocolo"
          label="Protocolo"
          placeholder="Ex.: RE-121345"
          buttonText="Buscar"
        />
      </Section>
      <Aside>
        <img src={image.file.publicURL} alt="teste" />
      </Aside>
    </Article>
  )
}

export default ProtocolosSectionContent
