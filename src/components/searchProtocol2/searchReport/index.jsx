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

  store.subscribe(() => {
    setSearchResults(store.getState())
  })

  return (
    <>
      {!error && !data && (
        <>
          <StyledAlertComponent severity="warning" title="EM MANUTENÇÃO">
            <Typography paragraph className={classes.hyphenate}>
              Para consultar o status do seu processo entre em contato pelo{" "}
              <Link
                color="textPrimary"
                href="https://api.whatsapp.com/send?phone=556239374650&text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20o%20status%20do%20meu%20protocolol"
                target="_blank"
              >
                <Button variant="contained" color="primary">
                  WhatsApp: (62) 3937-4650
                </Button>
              </Link>
            </Typography>
          </StyledAlertComponent>
        </>
      )}

      {loading && (
        <SectionLoadingFallback
          height="200px"
          color="primary"
          text="Buscando informações do seu protocolo no banco de dados"
        />
      )}

      {error && <HandleErrors error={error} />}

      {data?.process && (
        <StyledAlertComponent
          severity="success"
          title={<strong>Protocolo {data.process.name.split("-")[1]}</strong>}
        >
          {data.process?.nature && (
            <Typography className={classes.hyphenate}>
              <span style={{ fontWeight: "600" }}>Natureza:</span>{" "}
              {data.process.nature}
            </Typography>
          )}
          <Typography paragraph className={classes.hyphenate}>
            <span style={{ fontWeight: "600" }}>Etapa:</span>{" "}
            {data.process.step.name}
          </Typography>

          <Divider />
          <Typography paragraph />

          <Typography paragraph align="justify" className={classes.hyphenate}>
            {data.process.step.description}
          </Typography>
          {data.process?.email && (
            <Typography paragraph>
              E-mail cadastrado: "{data.process.email}"
            </Typography>
          )}

          {/* {data.process?.status && (
            <Typography className={classes.hyphenate}>
              <strong>Atenção</strong>: Seu protocolo possui a seguinte
              observação: "{data.process.status}".
            </Typography>
          )} */}

          {data.process.step?.allow_notes_download &&
            data.requirements_note?.encrypted_url && (
              <NotesDownloadDialog data={data} />
            )}
        </StyledAlertComponent>
      )}

      {data && !data.process && (
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
