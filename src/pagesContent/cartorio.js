import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Article, Section, Aside } from "../components/section"
import { Typography } from "@material-ui/core"

const CartorioSectionContent = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cartorio.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 90) {
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

        <Typography component="h3" variant="h6">
          Missão
        </Typography>
        <Typography>
          Garantir segurança jurídica e publicidade das transações imobiliárias
          com agilidade, eficiência e qualidade.
        </Typography>
        <br />
        <Typography component="h3" variant="h6">
          Visão
        </Typography>
        <Typography>
          Ser reconhecido como o melhor cartório pela qualidade e rapidez no
          serviço, ambiente interno e retorno à sociedade.
        </Typography>
        <br />
        <Typography component="h3" variant="h6">
          Valores
        </Typography>
        <ul>
          <li>
            <strong>Segurança jurídica</strong> – na prestação do serviço;
          </li>
          <li>
            <strong>Respeito e cordialidade</strong> – no relacionamento com as
            pessoas;
          </li>
          <li>
            <strong>Ética </strong>– no desempenho da função;
          </li>
          <li>
            <strong>Conhecimento</strong> – por meio da capacitação da equipe,
            comportamental e técnica;
          </li>
          <li>
            <strong>Inovação tecnológica;</strong>
          </li>
          <li>
            <strong>Agilidade e eficiência</strong> – na realização dos atos;
          </li>
          <li>
            <strong>Comprometimento</strong> – com as necessidades legítimas do
            usuário;
          </li>
        </ul>
        <br />
        <Typography component="h3" variant="h6">
          Política da qualidade
        </Typography>
        <Typography>
          Buscar a melhoria contínua e a satisfação dos seus clientes, conforme
          disposto em sua missão, visão e valores.
        </Typography>
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
