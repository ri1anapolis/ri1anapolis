import React, { useState } from "react"
import AES from "crypto-js/aes"
import Utf8Encoder from "crypto-js/enc-utf8"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Recaptcha from "react-recaptcha"

import styles from "./styles"

import GetAppIcon from "@material-ui/icons/GetApp"

const NotesDownloadDialog = ({ data }) => {
  const {
    requirements_note: { hash, encrypted_url },
  } = data
  const crypto_key = process.env.GATSBY_CRYPTO_KEY
  const recaptcha_key = process.env.GATSBY_RECAPTCHA_KEY
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

  const validateCaptcha = response => {
    if (response?.length > 0) {
      console.log("Captcha verificado!")
      const url = AES.decrypt(encrypted_url, crypto_key).toString(Utf8Encoder)
      setPreventDownload({ disabled: false, url })
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
          <DialogContentText paragraph align="justify">
            Valide seu acesso para baixar da Nota Devolutiva do protocolo{" "}
            {data.process.name.split("-")[1]}.
          </DialogContentText>
          <Recaptcha
            sitekey={recaptcha_key}
            render="explicit"
            hl="pt-BR"
            size={
              window.matchMedia("(min-width: 410px)").matches
                ? "normal"
                : "compact"
            }
            verifyCallback={validateCaptcha}
          />
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
