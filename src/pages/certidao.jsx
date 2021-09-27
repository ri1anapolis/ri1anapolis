import React from "react"
import LayoutLite from "../components/layoutLite"
import SEO from "../components/seo"
import CertidaoPanel from "../pagesContent/certidaoPanel"
import VoltarAoSite from "../pagesContent/voltarSite"

const CertidaoPage = () => (
  <LayoutLite>
    <SEO title="Solicite sua certidão" pathname="/certidao" />
    <CertidaoPanel />
    <VoltarAoSite />
  </LayoutLite>
)

export default CertidaoPage
