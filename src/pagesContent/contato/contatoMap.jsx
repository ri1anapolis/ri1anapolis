import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import useStyles from "./styles"

export default function ContatoMap() {
  const {
    file: { publicURL: map },
  } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "map.svg" }) {
        publicURL
      }
    }
  `)

  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <a
        href="https://maps.app.goo.gl/AXwRVJ2z5u1v7k2N6"
        target="_blank"
        rel="noreferrer"
      >
        <div className={classes.actionDiv}>
          <p>Clique para visualizar o mapa ampliado</p>
        </div>
      </a>
      <img
        src={map}
        alt="O Cartório de Registro de Imóveis da Primeira Circunscrição de Anápolis está localizando dentro do Anashopping."
        loading="lazy"
        className={classes.bgMap}
      />
    </div>
  )
}
