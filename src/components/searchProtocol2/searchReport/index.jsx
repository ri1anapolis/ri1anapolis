import React, { useState } from "react"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import AnchorLink from "react-anchor-link-smooth-scroll"
import loadable from "@loadable/component"

import store from "../reduxStore"
import HandleErrors from "./handleErrors"
import StyledAlertComponent from "../../styledAlertComponent"
import SectionLoadingFallback from "../../sectionLoadingFallback"

import styles from "./styles"

const NotesDownloadDialog = loadable(() => import("./notesDownloadDialog"))

const SearchReport = () => {
  const classes = styles()

  const [searchResults, setSearchResults] = useState(store.getState())
  const { error, loading, data } = searchResults
  const protocolData = data?.at(0)

  store.subscribe(() => {
    setSearchResults(store.getState())
  })

  return (
    <>
      {loading && (
        <SectionLoadingFallback
          height="200px"
          color="primary"
          text="Buscando informações do seu protocolo no banco de dados"
        />
      )}

      {error && <HandleErrors error={error} />}

      {!!protocolData?.name?.length && (
        <StyledAlertComponent
          severity="success"
          title={<strong>Protocolo {protocolData.name.split("-")[1]}</strong>}
        >
          {protocolData.nature && (
            <Typography className={classes.hyphenate}>
              <span style={{ fontWeight: "600" }}>Natureza:</span>{" "}
              {protocolData.nature}
            </Typography>
          )}
          <Typography paragraph className={classes.hyphenate}>
            <span style={{ fontWeight: "600" }}>Etapa:</span>{" "}
            {protocolData.step?.at(0)?.name}
          </Typography>

          <Divider />
          <Typography paragraph />

          <Typography paragraph align="justify" className={classes.hyphenate}>
            {protocolData.step?.at(0)?.description}
          </Typography>
          {protocolData.email && (
            <Typography paragraph>
              E-mail cadastrado: "{protocolData.email}"
            </Typography>
          )}

          {/* {protocolData?.status && (
            <Typography className={classes.hyphenate}>
              <strong>Atenção</strong>: Seu protocolo possui a seguinte
              observação: "{data.status}".
            </Typography>
          )} */}

          {protocolData.step?.at(0)?.allow_notes_download &&
            protocolData.requirements_notes?.at(0)?.encrypted_url && (
              <NotesDownloadDialog data={protocolData} />
            )}
        </StyledAlertComponent>
      )}

      {!!data && !protocolData?.name?.length && (
        <StyledAlertComponent
          severity="info"
          title="O protocolo informado não foi encontrado!"
        >
          <Typography paragraph className={classes.hyphenate}>
            Isso pode ocorrer caso o protocolo tenha sido finalizado há muito
            tempo ou tenha ocorrido uma falha de sincronização com o servidor do
            cartório.
          </Typography>
          <Typography className={classes.hyphenate}>
            Caso acredite que isso é um erro, entre em contato conosco pelos
            nossos{" "}
            <AnchorLink
              href="#contato"
              offset="89"
              style={{ color: "#0D3C61" }}
            >
              canais de atendimento.
            </AnchorLink>
          </Typography>
        </StyledAlertComponent>
      )}
    </>
  )
}

export default SearchReport
