import React from "react"
import { Typography } from "@material-ui/core"
import { Article, Section, Aside } from "../components/section2"
import StyledSearchField from "../components/searchProtocol2"

const ProtocolosSectionContent = () => {
  return (
    <Article id="protocolos">
      <Section>
        <Typography component="h1" variant="h4">
          Protocolos
        </Typography>

        <Typography>
          Acompanhe o andamento do seu processo! Informe no campo abaixo o
          número do protocolo presente em seu recibo e faça uma busca.
        </Typography>

        <StyledSearchField
          id="protocolo"
          label="Protocolo"
          placeholder="Ex.: RE-121345"
          buttonText="Buscar"
        />
        <br />
      </Section>

      <Aside style={{ display: "block" }}></Aside>
    </Article>
  )
}

export default ProtocolosSectionContent
