import React from "react"
import { Typography } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"

import { Article, Section, Aside } from "../components/section"
import { ServicosDrawer, OpenDrawerButton } from "./servicosDrawer"

const ServicosSectionContent = () => {
  const image = useStaticQuery(graphql`
    query {
      file(name: { regex: "/documentos/" }) {
        publicURL
      }
    }
  `)

  return (
    <Article id="servicos" background="true">
      <ServicosDrawer />

      <Aside>
        <img src={image.file.publicURL} alt="teste" />
      </Aside>
      <Section>
        <Typography component="h1" variant="h4">
          Serviços
        </Typography>

        <Typography>
          Ao solicitar qualquer tipo de registro e/ou averbação, é necessária a
          apresentação de uma série de documentos obrigatórios. Abaixo é
          possível verificar quais são os documentos necessários de acordo com
          cada tipo de ato. Importante ressaltar que, dependendo da análise
          jurídica do protocolo, poderá haver o pedido de complementação de
          documentos.
        </Typography>
        <br />
        <Typography>
          Portanto, a listagem fornecida serve como auxílio inicial, mas pode
          não ser definitiva. Usuário, caso você tenha um programa anti pop-up,
          você deverá desativá-lo. Documentos
        </Typography>
        <ul>
          <li>
            Adjudicação Compulsória Alienação Fiduciária Sem Compra e Venda
          </li>
          <li>
            Alteração de imóvel Rural para Urbano Arresto Averbação de Alteração
            de
          </li>
          <li>
            Razão Social Averbação de Casamento Averbação de Construção – Imóvel
          </li>
          <li>
            Rural Averbação de Construção – Imóvel Urbano Averbação de Demolição
          </li>
          <li>
            Averbação de Existência de Ação Averbação de Logradouro/Inscrição
          </li>
        </ul>
        <OpenDrawerButton variant="outlined">Saiba mais</OpenDrawerButton>
      </Section>
    </Article>
  )
}

export default ServicosSectionContent
