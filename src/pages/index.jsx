import React from "react"
import Layout from "../components/layout2"
import SEO from "../components/seo"
import SectionProtocolos from "../pagesContent/protocolos2"
import Loadable from "react-loadable"
import SectionLoadingFallback from "../components/sectionLoadingFallback"

const SectionServicos = Loadable({
  loader: () => import("../pagesContent/servicos2"),
  loading: SectionLoadingFallback,
  delay: 300,
})
const SectionCartorio = Loadable({
  loader: () => import("../pagesContent/cartorio2"),
  loading: SectionLoadingFallback,
  delay: 300,
})
const SectionContato = Loadable({
  loader: () => import("../pagesContent/contato2"),
  loading: SectionLoadingFallback,
  delay: 300,
})

const IndexPage = () => (
  <Layout>
    <SEO title="Consulte seu Protocolo" pathname="/" />
    <SectionProtocolos />
    <SectionServicos />
    <SectionCartorio />
    <SectionContato />
  </Layout>
)

export default IndexPage
