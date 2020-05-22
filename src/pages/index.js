import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionProtocolos from "../pagesContent/protocolos"
import SectionServicos from "../pagesContent/servicos"
import SectionCartorio from "../pagesContent/cartorio"
import SectionContato from "../pagesContent/contato"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionProtocolos />
    <SectionServicos />
    <SectionCartorio />
    <SectionContato />
  </Layout>
)

export default IndexPage
