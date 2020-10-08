import React, { useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import HmacMD5 from "crypto-js/hmac-md5"
import AES from "crypto-js/aes"
import Utf8Encoder from "crypto-js/enc-utf8"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Grow from "@material-ui/core/Grow"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

import styles from "./styles"

import GetAppIcon from "@material-ui/icons/GetApp"
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline"

const NotesDownloadDialog = ({ data }) => {
  const verificationImg = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "protocol_verification_code.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 55, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const {
    requirements_note: { hash, encrypted_url },
  } = data
  const crypto_key = process.env.GATSBY_CRYPTO_KEY
  const defaultState = {
    disabled: true,
    url: "#",
  }

  const classes = styles()
  const [showDownloadForm, setShowDownloadForm] = useState(false)
  const [preventDownload, setPreventDownload] = useState(defaultState)

  const disableDownload = () => {
    if (!preventDownload.disabled) setPreventDownload(defaultState)
  }

  const toggleDialog = () => {
    setShowDownloadForm(!showDownloadForm)
    disableDownload()
  }

  const delayedClosing = () => {
    setTimeout(toggleDialog, 500)
  }

  const validateInput = event => {
    const userInput = event.currentTarget.value
    const testHash = () => HmacMD5(userInput, crypto_key).toString() === hash

    if (userInput?.length >= 8 && testHash()) {
      const url = AES.decrypt(encrypted_url, crypto_key).toString(Utf8Encoder)
      setPreventDownload({ disabled: false, url })
      return
    }
    disableDownload()
  }

  return (
    <>
      <Button
        style={{ padding: 0, marginLeft: "-25px" }}
        startIcon={<GetAppIcon />}
        size="small"
        color="inherit"
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
          <Typography paragraph align="justify">
            Informe abaixo o Código Verificador do protocolo {data.process.name}{" "}
            para baixar da Nota Devolutiva.
          </Typography>
          <DialogContentText align="justify" variant="caption">
            O Código Verificador pode ser encontrado no recibo original emitido
            pelo cartório, logo abaixo do número do protocolo.
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
                label="Verificador"
                placeholder="Ex.: 10123456"
                autoComplete="off"
                onChange={validateInput}
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
