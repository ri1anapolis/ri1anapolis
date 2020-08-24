import React from "react"
import Layout from "../components/layout2"
import SEO from "../components/seo"
import SectionProtocolos from "../pagesContent/protocolos2"
import Loadable from "react-loadable"
import SectionLoadingFallback from "../components/sectionLoadingFallback"

import LogRocket from "logrocket"
import setupLogRocketReact from "logrocket-react"
if (process.env.NODE_ENV === "production") {
  LogRocket.init(process.env.LOGROCKET_APP_ID)
  setupLogRocketReact(LogRocket)
}

const SectionServicos = Loadable({
  loader: () => import("../pagesContent/servicos2"),
  loading: () => <SectionLoadingFallback height="465px" />,
  delay: 300,
})
const SectionCartorio = Loadable({
  loader: () => import("../pagesContent/cartorio2"),
  loading: () => <SectionLoadingFallback height="705px" />,
  delay: 300,
})
const SectionContato = Loadable({
  loader: () => import("../pagesContent/contato2"),
  loading: () => <SectionLoadingFallback height="504px" />,
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
