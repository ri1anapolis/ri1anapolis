import React, { useState, useEffect } from "react"
import { useForm, FormProvider } from "react-hook-form"

import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import CircularProgress from "@material-ui/core/CircularProgress"
import LinearProgress from "@material-ui/core/LinearProgress"
import StyledPopover from "./styledPopover"
import HelpIconButton from "../../components/helpIconButton"
import HelpIcon from "@material-ui/icons/Help"

import clsx from "clsx"
import useTheme from "@material-ui/styles/useTheme"
import useStyles from "./styles"

import FormTextField from "./formTextField"
import { TextMaskCpfCnpj } from "../../components/muiMaskedInputs"
import { TextMaskPhone } from "../../components/muiMaskedInputs"
import { yupResolver } from "@hookform/resolvers"
import validationSchema from "./formValidationSchemaCertidao"

import mailer from "../../utils/mailer"

const CertidaoPanel = props => {
  const localStorageId = "formData"

  const theme = useTheme()
  const classes = useStyles(theme)
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null)
  const [popoverShow, setPopoverShow] = useState(false)
  const [popoverStatus, setPopoverStatus] = useState(null)
  const [askProprietaryName, setAskProprietaryName] = useState(false)

  const savedData =
    window.localStorage?.getItem(localStorageId) || null
      ? JSON.parse(window.localStorage.getItem(localStorageId))
      : {}

  const { formState, handleSubmit, reset, ...formMethods } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    defaultValues: savedData,
  })
  const { isSubmitting } = formState

  /*eslint-disable*/
  useEffect(() => {
    const proprietaryId = formMethods
      .getValues("proprietaryId")
      .replace(/\D/g, "")
    const validLengths = [11, 14]
    const isValid = validLengths.includes(proprietaryId.length)
    setAskProprietaryName(isValid)
  })

  const handleAskProprietaryName = event => {
    const delKeys = [8, 46]

    if (delKeys.includes(event.keyCode)) {
      formMethods.setValue("proprietaryName", "")
      formMethods.clearErrors("proprietaryName")
    }
  }

  const handleCloseFormStatus = () => {
    setPopoverShow(false)
    props.handleDrawer()
  }

  const onSubmit = async data => {
    setPopoverAnchorEl(document.getElementById("certidao-form-container"))
    setPopoverStatus("loading")
    setPopoverShow(true)

    try {
      const formData = { ...data }
      delete formData.propertyAddress
      delete formData.propertyId
      delete formData.proprietaryId
      delete formData.proprietaryName
      delete formData.requestDescription
      window.localStorage.setItem(localStorageId, JSON.stringify(formData))
    } catch (error) {
      console.error(`Error saving form to storage: ${error}`)
    }

    const response = await mailer(data)
    if (response?.status < 300) {
      setPopoverStatus("success")
      console.log(`A solicitação foi enviada com sucesso!`)
      reset()
    } else {
      setPopoverStatus("fail")
      console.error(
        `Houve um erro ao tentar enviar a solicitação${
          response.error ? ": " + response.error : "!"
        }`
      )
    }
  }

  return (
    <>
      <Container id="certidao-form-container">
        <Grid item className={classes.sections} xs={12}>
          <Typography variant="h5">
            Solicitação de{" "}
            <Typography component="span" variant="h5" noWrap>
              Certidões
              <HelpIconButton
                tooltipTitle="Precisa de ajuda?"
                Icon={<HelpIcon />}
                link={{
                  url: "https://ri1anapolis.page.link/ajuda_certidao_site",
                  text: "Assista um vídeo explicativo",
                }}
              />
            </Typography>
          </Typography>
        </Grid>
        <FormProvider {...formMethods}>
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
              <Grid
                item
                md={9}
                className={clsx(classes.captionContainer, classes.sections)}
              >
                <Typography variant="caption">
                  Descreva as características dos imóveis para solicitar
                  certidões.
                  <br />
                  Informe os dados pessoais de uma pessoa para solicitar uma
                  busca.
                </Typography>
              </Grid>
              <Grid
                item
                sm={5}
                md={6}
                style={{ order: 3 }}
                className={classes.sections}
              >
                <Typography> Informações do solicitante:</Typography>
                <Typography variant="caption" color="textSecondary" paragraph>
                  Identifique-se! Os dados abaixo constarão no recibo.
                </Typography>
                <FormTextField
                  required
                  name="requesterName"
                  label="Nome"
                  placeholder="Seu nome completo"
                />
                <FormTextField
                  required
                  name="requesterID"
                  label="CPF/CNPJ"
                  placeholder="Seu CPF/CNPJ"
                  inputProps={{
                    inputMode: "numeric",
                  }}
                  InputProps={{
                    inputComponent: TextMaskCpfCnpj,
                  }}
                />
                <FormTextField
                  required
                  name="requesterPhone"
                  label="Telefone"
                  placeholder="Seu número de telefone ou WhatsApp"
                  inputProps={{
                    inputMode: "numeric",
                  }}
                  InputProps={{
                    inputComponent: TextMaskPhone,
                  }}
                />
                <FormTextField
                  required
                  name="requesterEmail"
                  label="E-mail"
                  placeholder="Seu email, onde será enviada a certidão"
                />
              </Grid>
              <Grid
                item
                sm={7}
                md={6}
                style={{ order: 5 }}
                className={classes.sections}
              >
                <Typography>Dados da solicitação:</Typography>
                <Typography variant="caption" color="textSecondary" paragraph>
                  Informações a constar nas buscas/certidões.
                </Typography>
                <FormTextField
                  name="propertyAddress"
                  label="Endereço do imóvel (opcional)"
                  placeholder="Lote, quadra, bairro do imóvel"
                />
                <FormTextField
                  name="propertyId"
                  label="Matrícula do Imóvel (opcional)"
                  placeholder="Número da matrícula do imóvel"
                  inputProps={{
                    inputMode: "numeric",
                  }}
                />
                <FormTextField
                  name="proprietaryId"
                  label="CPF/CNPJ do proprietário (opcional)"
                  placeholder="CPF/CNPJ do proprietário do imóvel"
                  onKeyDown={handleAskProprietaryName}
                  inputProps={{
                    inputMode: "numeric",
                  }}
                  InputProps={{
                    inputComponent: TextMaskCpfCnpj,
                  }}
                />
                {askProprietaryName && (
                  <FormTextField
                    required
                    name="proprietaryName"
                    label="Nome do Proprietário"
                    placeholder="Nome do proprietário do imóvel"
                  />
                )}
                <FormTextField
                  required
                  multiline
                  name="requestDescription"
                  label="Solicitação"
                  placeholder="Descreva como podemos te ajudar"
                  hints={[
                    {
                      label: "Certidão de Inteiro Teor",
                      "data-tooltip":
                        "Cópia integral da Matrícula, com todo o histórico do imóvel.",
                    },
                    {
                      label: "Certidão de Ônus",
                      "data-tooltip":
                        "Indica todos os ônus do imóvel e os impedimentos à sua livre comercialização.",
                    },
                    {
                      label: "Busca e informação",
                      "data-tooltip":
                        "Ao adicionar esta opção, escreva livremente seu desejo.",
                    },
                  ]}
                />
              </Grid>
              <Grid
                item
                container
                justify="flex-end"
                sm={5}
                md={3}
                className={clsx(classes.sections, classes.buttonContainer)}
              >
                <div className={classes.button}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isSubmitting}
                    fullWidth
                  >
                    {isSubmitting ? (
                      <>
                        <CircularProgress
                          style={{ color: "grey", marginRight: "5px" }}
                          size={20}
                        />
                        Enviando
                      </>
                    ) : (
                      "Enviar Solicitação"
                    )}
                  </Button>
                </div>
              </Grid>
              <Grid
                item
                container
                xs={12}
                sm={7}
                md={12}
                className={clsx(classes.notice, classes.sections)}
              >
                <Typography variant="caption" style={{ color: "#FF0000" }}>
                  Somente os itens com asterisco (*) são obrigatórios!
                </Typography>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Container>
      <StyledPopover
        open={popoverShow}
        sendingStatus={popoverStatus}
        anchorEl={popoverAnchorEl}
        handleClose={handleCloseFormStatus}
      />
      {isSubmitting && <LinearProgress />}
    </>
  )
}

export default CertidaoPanel
