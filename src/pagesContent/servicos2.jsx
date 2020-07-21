import React from "react"
import { Typography } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Article, Section, Aside } from "../components/section"

const ServicosSectionContent = () => {
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
          Ao solicitar qualquer tipo de registro e/ou averbação, é necessária a
          apresentação de uma série de documentos obrigatórios. Durante a
          análise do processo é possível ainda que seja necessária a
          complementação de documentos.
        </Typography>
        <Typography>
          Nessa seção será possível consultar e baixar os documentos necessários
          para registro, bem como modelos de requerimentos e outros tipos de
          documentos.
        </Typography>
        <br />
        <Typography>
          Estamos trabalhando arduamente para disponibilizar todos os arquivos,
          documentos e informações tão logo quanto possível.
        </Typography>
      </Section>
    </Article>
  )
}

export default ServicosSectionContent
