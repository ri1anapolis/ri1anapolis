import React from "react"
import { Typography } from "@material-ui/core"
import { Article, Section, Aside } from "../components/section2"
import SearchForm, { SearchReport } from "../components/searchProtocol2"

const ProtocolosSectionContent = () => {
  return (
    <Article id="protocolos">
      <Section md={6} lg={5}>
        <Typography component="h1" variant="h4">
          Protocolos
        </Typography>

        <Typography>
          Acompanhe o andamento do seu processo! Informe no campo abaixo o
          número do protocolo presente em seu recibo e faça uma busca.
        </Typography>

        <SearchForm
          id="protocolo"
          label="Protocolo"
          placeholder='Ex.: "120123" ou "RE-121345"'
          buttonText="Buscar"
        />
        <br />
      </Section>

      <Aside md={6} lg={7}>
        <SearchReport />
      </Aside>
    </Article>
  )
}

export default ProtocolosSectionContent
