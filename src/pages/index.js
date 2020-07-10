import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionProtocolos from "../pagesContent/protocolos"
import Loadable from "react-loadable"
import SectionLoadingFallback from "../components/sectionLoadingFallback"

const ModalAviso = Loadable({
  loader: () => import("../pagesContent/modalAviso"),
  loading: SectionLoadingFallback,
  delay: 300,
})
const SectionServicos = Loadable({
  loader: () => import("../pagesContent/servicos"),
  loading: SectionLoadingFallback,
  delay: 300,
})
const SectionCartorio = Loadable({
  loader: () => import("../pagesContent/cartorio"),
  loading: SectionLoadingFallback,
  delay: 300,
})
const SectionContato = Loadable({
  loader: () => import("../pagesContent/contato"),
  loading: SectionLoadingFallback,
  delay: 300,
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionProtocolos />
    <SectionServicos />
    <SectionCartorio />
    <SectionContato />
    <ModalAviso />
  </Layout>
)

export default IndexPage
