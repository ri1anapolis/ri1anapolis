import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Article, Section, Aside } from "../components/section2"
import { Typography } from "@material-ui/core"

const CartorioSectionContent = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cartorio.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Article id="cartorio">
      <Section>
        <Typography component="h1" variant="h4">
          O Cartório
        </Typography>

        <Typography variant="h6">Missão</Typography>
        <Typography>
          Garantir a segurança jurídica, publicidade e eficácia dos atos
          jurídicos registrais de forma ágil, satisfatória e com qualidade, à
          luz da legislação vigente.
        </Typography>
        <br />
        <Typography variant="h6">Visão</Typography>
        <Typography>
          Prestar um serviço público registral de excelência máxima, com a
          melhor estrutura, equipe e tecnologias, visando a máxima eficiência,
          agilidade e conhecimento técnicos e no atendimento ao público.
        </Typography>
        <br />
        <Typography variant="h6">Valores</Typography>
        <Typography>
          São nossos valores, que devem permear todas as atividades
          desenvolvidas na Serventia:
        </Typography>
        <ul>
          <li>
            <strong>Profissionalismo</strong>
          </li>
          <li>
            <strong>Comprometimento</strong>
          </li>
          <li>
            <strong>Criatividade e Iniciativa</strong>
          </li>
          <li>
            <strong>Integridade Moral e Ética</strong>
          </li>
          <li>
            <strong>Impessoalidade e Justiça</strong>
          </li>
          <li>
            <strong>Eficiência</strong>
          </li>
          <li>
            <strong>Solidez Econômica</strong>
          </li>
          <li>
            <strong>Espírito de Equipe</strong>
          </li>
          <li>
            <strong>Respeito</strong>
          </li>
        </ul>
      </Section>
      <Aside>
        <Img
          fluid={image.file.childImageSharp.fluid}
          alt="Imagem da equipe do cartório"
          style={{ width: "100%" }}
        />
      </Aside>
    </Article>
  )
}

export default CartorioSectionContent
