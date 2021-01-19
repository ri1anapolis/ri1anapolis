import React from "react"
import Layout from "../components/layout2"
import SEO from "../components/seo"
import SectionProtocolos from "../pagesContent/protocolos2"
import loadable from "@loadable/component"
import SectionLoadingFallback from "../components/sectionLoadingFallback"

const SectionServicos = loadable(() => import("../pagesContent/servicos2"), {
  fallback: <SectionLoadingFallback height="465px" />,
})
const SectionCartorio = loadable(() => import("../pagesContent/cartorio2"), {
  fallback: <SectionLoadingFallback height="705px" />,
})
const SectionContato = loadable(() => import("../pagesContent/contato2"), {
  fallback: <SectionLoadingFallback height="504px" />,
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
