import React from "react"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/styles/makeStyles"
import { Article, Section, Aside } from "../components/section2"
import SearchForm, { SearchReport } from "../components/searchProtocol2"

const useStyles = makeStyles({
  hyphenate: {
    wordWrap: "break-word !important",
    overflowWrap: "break-word !important",
    "-webkit-hyphens": "auto",
    "-ms-hyphens": "auto",
    hyphens: "auto",
  },
})

const ProtocolosSectionContent = () => {
  const classes = useStyles()
  return (
    <Article id="protocolos">
      <Section md={6} lg={5}>
        <Typography component="h1" variant="h4">
          Protocolos
        </Typography>

        <Typography className={classes.hyphenate}>
          Acompanhe o andamento do seu processo. Informe no campo abaixo o
          número do protocolo presente em seu recibo e faça uma busca.
        </Typography>

        <SearchForm
          id="protocolo"
          label="Protocolo"
          placeholder='Ex.: "120123"'
          buttonText="Buscar"
        />
        <br />
      </Section>

      <Aside md={6} lg={7}>
        <SearchReport />
      </Aside>
    </Article>
  )
}

export default ProtocolosSectionContent
