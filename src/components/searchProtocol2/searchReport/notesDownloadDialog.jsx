import React, { useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import HmacMD5 from "crypto-js/hmac-md5"
import AES from "crypto-js/aes"
import Utf8Encoder from "crypto-js/enc-utf8"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import Grow from "@material-ui/core/Grow"
import CircularProgress from "@material-ui/core/CircularProgress"
import {
  EReCaptchaV2Size,
  EReCaptchaV2Theme,
  ReCaptchaProvider,
  ReCaptchaV2,
} from "react-recaptcha-x"

import styles from "./styles"

import GetAppIcon from "@material-ui/icons/GetApp"
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline"

const NotesDownloadDialog = ({ data }) => {
  const encrypted_url = data.requirements_note.encrypted_url
  const hash = data.requirements_note.hash
  const crypto_key = process.env.GATSBY_CRYPTO_KEY
  const recaptcha_key = process.env.GATSBY_RECAPTCHA_KEY
  const defaultState = {
    disabled: true,
    url: "#",
  }
  const classes = styles()
  const [showDownloadForm, setShowDownloadForm] = useState(false)
  const [preventDownload, setPreventDownload] = useState(defaultState)
  const [useCaptchaFallback, setUseCaptchaFallback] = useState(false)

  const verificationImg = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "protocol_verification_code.jpg" }) {
        childImageSharp {
          fixed(width: 203, height: 57, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const disableDownload = () => {
    if (!preventDownload.disabled) setPreventDownload(defaultState)
  }

  const toggleDialog = () => {
    setShowDownloadForm(!showDownloadForm)
    setUseCaptchaFallback(false)
    disableDownload()
  }

  const delayedClosing = () => {
    setTimeout(toggleDialog, 500)
  }

  const decryptUrl = () => {
    const url = AES.decrypt(encrypted_url, crypto_key).toString(Utf8Encoder)
    setPreventDownload({ disabled: false, url })
  }

  const v2Callback = token => {
    if (typeof token === "string") {
      console.log("Captcha verificado!")
      decryptUrl()
    } else if (typeof token === "boolean" && !token) {
      console.log("O Captcha expirou!")
      disableDownload()
    } else if (token instanceof Error) {
      console.log(
        "Erro no Captcha! Alterando para modo de validação secundário."
      )
      disableDownload()
    } else {
      console.log(`o que aconteceu?`, token)
    }
  }

  const validateInput = event => {
    const userInput = event.currentTarget.value
    const testHash = () => HmacMD5(userInput, crypto_key).toString() === hash

    if (userInput?.length >= 8 && testHash()) {
      decryptUrl()
      return
    }
    disableDownload()
  }

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<GetAppIcon />}
        size="small"
        color="secondary"
        onClick={toggleDialog}
      >
        Baixar Nota Devolutiva
      </Button>
      <Dialog
        open={showDownloadForm}
        onClose={toggleDialog}
        aria-labelledby="Baixar nota devolutiva"
      >
        <DialogTitle disableTypography>
          <Typography variant="subtitle1">Nota Devolutiva</Typography>
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          {!useCaptchaFallback && (
            <>
              <DialogContentText paragraph align="justify">
                Valide seu acesso para baixar da Nota Devolutiva do protocolo{" "}
                {data.process.name.split("-")[1]}.
              </DialogContentText>

              <Grid
                container
                alignContent="center"
                className={classes.captchaWrapper}
              >
                <Grid item container spacing={2} wrap="nowrap">
                  <Grid item>
                    <CircularProgress />
                  </Grid>
                  <Grid item>
                    <Button
                      color="secondary"
                      onClick={() => setUseCaptchaFallback(true)}
                    >
                      <small>Prolemas? Clique aqui!</small>
                    </Button>
                  </Grid>
                </Grid>
                <div className={classes.captchaContainer}>
                  <ReCaptchaProvider siteKeyV2={recaptcha_key} langCode="pt-BR">
                    <ReCaptchaV2
                      callback={v2Callback}
                      theme={EReCaptchaV2Theme.Light}
                      size={
                        window.matchMedia("(min-width: 410px)").matches
                          ? EReCaptchaV2Size.Normal
                          : EReCaptchaV2Size.Compact
                      }
                      tabIndex={0}
                      id="requirements-notes-recaptcha"
                    />
                  </ReCaptchaProvider>
                </div>
              </Grid>
            </>
          )}

          {useCaptchaFallback && (
            <>
              <Typography paragraph align="justify">
                Informe abaixo o Código Verificador do protocolo{" "}
                {data.process.name} para baixar da Nota Devolutiva.
              </Typography>
              <DialogContentText align="justify" variant="caption">
                O Código Verificador pode ser encontrado no recibo original
                emitido pelo cartório, logo abaixo do número do protocolo.
              </DialogContentText>
              <Grid container justify="space-between">
                <Grid
                  item
                  container
                  alignItems="flex-end"
                  style={{
                    width: "auto",
                  }}
                >
                  <TextField
                    className={classes.verificationInput}
                    label="Verificador"
                    placeholder="Ex.: 10123456"
                    autoComplete="off"
                    onChange={validateInput}
                    type="number"
                  />
                  <Grow in={!preventDownload.disabled}>
                    <CheckCircleOutlineIcon style={{ color: "#4CAF50" }} />
                  </Grow>
                </Grid>
                <Grid item>
                  <Img
                    fixed={verificationImg.file.childImageSharp.fixed}
                    alt="Baixe a Nota Devolutiva do protocolo pelo site!"
                  />
                </Grid>
              </Grid>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.dialogButton}
            onClick={toggleDialog}
            size="small"
          >
            Cancelar
          </Button>
          <Button
            disabled={preventDownload.disabled}
            className={classes.dialogButton}
            size="small"
            variant="contained"
            color="primary"
            href={preventDownload.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={delayedClosing}
          >
            Baixar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default NotesDownloadDialog
