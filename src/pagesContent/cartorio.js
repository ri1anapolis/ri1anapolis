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
          fluid(maxWidth: 500, quality: 80) {
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
          Garantir a segurança jurídica, publicidade e eficácia dos atos
          jurídicos registrais de forma ágil, satisfatória e com qualidade, à
          luz da legislação vigente.
        </Typography>
        <br />
        <Typography component="h3" variant="h6">
          Visão
        </Typography>
        <Typography>
          Prestar um serviço público registral de excelência máxima, com a
          melhor estrutura, equipe e tecnologias, visando a máxima eficiência,
          agilidade e conhecimento técnicos e no atendimento ao público.
        </Typography>
        <br />
        <Typography component="h3" variant="h6">
          Valores
        </Typography>
        <Typography>
          São nossos valores, que devem permear todas as atividades
          desenvolvidas na Serventia:
        </Typography>
        <ul>
          <li>
            <strong>Profissionalismo</strong> - Busca por capacitação
            profissional permanente;
          </li>
          <li>
            <strong>Comprometimento</strong> - Cumprir em todos os atos o art.
            1º, parágrafo único, da Constituição Federal, e demais normas legais
            e regimentais pertinentes, e buscar o sucesso da organização;
          </li>
          <li>
            <strong>Capacidade de Iniciativa</strong> - Agir com criatividade e
            por iniciativa própria frente às necessidades do ambiente de
            trabalho, evitando a estagnação na relação funcional;
          </li>
          <li>
            <strong>Integridade Moral e Ética</strong> - Ser um espelho de moral
            e ética frente aos usuários e aos demais colaboradores, demonstrando
            de forma clara a perfeita honestidade na condução dos trabalhos e na
            vida pessoal;
          </li>
          <li>
            <strong>Impessoalidade</strong> - Tratamento igualitário para todos,
            independentemente de classe social, sexo, cor, raça ou qualquer
            outro parâmetro de distinção, salvo quando a distinção for
            necessária para possibilitar a igualdade material entre os usuários;
          </li>
          <li>
            <strong>Eficiência</strong> - Uso das melhores tecnologias e
            procedimentos que tragam economia de tempo e meios materiais,
            visando a segurança jurídica ao trânsito de direitos ligados ao
            setor imobiliário no Município;
          </li>
          <li>
            <strong>Solidez Econômica</strong> - Valorizar os resultados
            econômicos, por ser uma das determinantes do desenvolvimento e
            manutenção do Cartório e da equipe que o compõe;
          </li>
          <li>
            <strong>Espírito de Equipe</strong> - Integrar-se constantemente ao
            processo e ao grupo de trabalho, como forma de alimentar o
            crescimento e o sucesso da organização;
          </li>
          <li>
            <strong>Respeito ao Próximo</strong> - Tratar a todos com atitudes
            de respeito e consideração, independentemente das inclinações
            pessoais.
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
