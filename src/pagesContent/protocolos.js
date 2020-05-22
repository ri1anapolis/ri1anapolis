import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Article, Section, Aside } from "../components/section"
import { Typography } from "@material-ui/core"

const ProtocolosSectionContent = () => {
  const image = useStaticQuery(graphql`
    query {
      file(name: { regex: "/about/" }) {
        publicURL
      }
    }
  `)

  return (
    <Article id="protocolos">
      <Section>
        <Typography component="h1" variant="h4">
          Protocolos
        </Typography>
        <br />
      </Section>
      <Aside>
        <img src={image.file.publicURL} alt="teste" />
      </Aside>
    </Article>
  )
}

export default ProtocolosSectionContent
