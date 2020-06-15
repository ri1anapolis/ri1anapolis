import React from "react"
import { Container, Typography } from "@material-ui/core"
import { Article, Section, Aside } from "../components/section"
import StyledSearchField from "../components/searchProtocol"
import StyledTimelineComponent from "../components/styledTimelineComponent"

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
        <Typography>
          Entenda os fluxos de trabalho aos quais são submetidos os protocolos
          nos quadros abaixo:
        </Typography>
        <br />
      </Section>
      <Aside>
        <Container style={{ maxHeight: "400px", margin: "0", padding: "0" }}>
          <StyledTimelineComponent
            items={[
              { title: "Protocolo", description: "Prenotação do serviço." },
              {
                title: "Pré-Registro",
                description: "Emissão das certidões necessárias ao processo.",
              },
              {
                title: "Aguardando Reingresso",
                description:
                  "Aguardando a parte cumprir as exigências necessárias para registro.",
              },
              {
                title: "Tratamento Inicial",
                description:
                  "Tratamento e digitalização da documentação apresentada.",
              },
              {
                title: "Prot. Viculados",
                description:
                  "O protocolo em questão fica aguardando o cumprimento das exigências de outro protocolo vinculado.",
              },
              {
                title: "Distribuição",
                description:
                  "Sorteio e distribuição dos processos entre os escreventes.",
              },
              {
                title: "Análise",
                description:
                  "Análise do processo e documentação pelo escrevente.",
              },
              {
                title: "Redistribuição",
                description:
                  "O protocolo deverá ser redistribuido para outro escrevente para conferência da análise.",
              },
              {
                title: "Notificação",
                description:
                  "Notificação extrajudicial às partes interessadas.",
              },
              {
                title: "Edital",
                description: "Desenvolvimento e publicação de edital.",
              },
              {
                title: "Conferência de Nota",
                description:
                  "Conferência das notas de exigência por parte do oficial registrador.",
              },
              {
                title: "Conferência de Processo",
                description:
                  "Análise do processo por outro escrevente em casos complexos.",
              },
              { title: "Selagem", description: "Selagem dos documentos." },
              {
                title: "Impressão",
                description: "Impressão da documentação gerada pelo cartório.",
              },
              {
                title: "Assinatura",
                description: "Assinatura dos atos nas matrículas.",
              },
              {
                title: "Certidão",
                description: "Emissão de certidões pós atos.",
              },
              {
                title: "Pendencia Caixa",
                description:
                  "Há pendências de caixa que necessitam ser sanadas antes da finalização do processo.",
              },
              {
                title: "Balcão/Arquivo",
                description:
                  "Processo finalizado, aguardando retirada pelo cliente.",
              },
              {
                title: "Entregue",
                description: "Processo finalizado e entregue à parte.",
              },
              { title: "Cancelados", description: "Protocolo cancelado." },
            ]}
          />
        </Container>
      </Aside>
    </Article>
  )
}

export default ProtocolosSectionContent
