import React, { useState } from "react"
import { useForm, FormProvider, useFormContext } from "react-hook-form"
import clsx from "clsx"
import { Container, Grid, Typography } from "@material-ui/core"
import { Button, TextField, Popover, Link } from "@material-ui/core"
import { CircularProgress, LinearProgress } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/styles"
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline"
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline"
import { yupResolver } from "@hookform/resolvers"
import validationSchema from "../utils/formValidationSchemaCertidao"
import { TextMaskCpfCnpj, TextMaskPhone } from "../components/muiMaskedInputs"
import mailer from "../utils/mailer"

const useStyles = makeStyles(theme => ({
  sections: {
    padding: "10px",
    paddingBottom: "20px",
  },
  inputs: {
    marginBottom: ".35rem",
  },
  captionContainer: {
    width: "100%",
    order: "1",
    [theme.breakpoints.down("xs")]: {
      order: "4",
    },
  },
  buttonContainer: {
    order: "7",
    [theme.breakpoints.up("md")]: {
      order: "2",
    },
  },
  button: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  popoverStatus: {
    maxWidth: "500px",
    minWidth: "300px",
    padding: "30px",
  },
}))

const FormTextField = props => {
  const { register, errors, trigger } = useFormContext()
  const classes = useStyles()
  const { name, ...other } = props
  return (
    <TextField
      fullWidth
      className={classes.inputs}
      inputRef={register}
      name={name}
      {...other}
      helperText={errors[name] ? errors[name].message : null}
      error={!!errors[name]}
      onChange={() => {
        trigger(name)
      }}
    />
  )
}

const CertidaoPanel = props => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null)
  const [popoverShow, setPopoverShow] = useState(false)
  const [popoverStatus, setPopoverStatus] = useState(null)

  const { formState, handleSubmit, reset, ...formMethods } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  })
  const { isSubmitting, isValid } = formState

  const handleCloseFormStatus = () => {
    setPopoverShow(false)
    props.handleDrawer()
  }

  const onSubmit = async data => {
    setPopoverAnchorEl(document.getElementById("certidao-form-container"))
    setPopoverStatus("loading")
    setPopoverShow(true)

    const response = await mailer(data)
    if (response.status && response.status < 300) {
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
          <Typography variant="h5">Solicitação de Certidões</Typography>
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
                <Typography>Informações do solicitante:</Typography>
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
                  InputProps={{
                    inputComponent: TextMaskCpfCnpj,
                  }}
                />
                <FormTextField
                  required
                  name="requesterPhone"
                  label="Telefone"
                  placeholder="Seu número de telefone ou WhatsApp"
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
                <FormTextField
                  name="propertyAddress"
                  label="Endereço do imóvel"
                  placeholder="Lote, quadra, bairro do imóvel"
                />
                <FormTextField
                  name="propertyId"
                  label="Matrícula do Imóvel"
                  placeholder="Número da matrícula do imóvel"
                />
                <FormTextField
                  name="proprietaryId"
                  label="CPF/CNPJ do proprietário"
                  placeholder="CPF/CNPJ do proprietário do imóvel"
                  InputProps={{
                    inputComponent: TextMaskCpfCnpj,
                  }}
                />
                <FormTextField
                  required
                  multiline
                  name="requestDescription"
                  label="Solicitação"
                  placeholder="Descreva como podemos te ajudar"
                />
              </Grid>
              <Grid
                item
                container
                justify="flex-end"
                md={3}
                className={clsx(classes.sections, classes.buttonContainer)}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  type="submit"
                  disabled={!isValid || isSubmitting}
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
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Container>
      <Popover
        open={popoverShow}
        onClose={handleCloseFormStatus}
        anchorEl={popoverAnchorEl}
        anchorOrigin={{ vertical: "center", horizontal: "center" }}
        transformOrigin={{ vertical: "center", horizontal: "center" }}
        disableRestoreFocus
      >
        {popoverStatus === "loading" && (
          <Container
            className={classes.popoverStatus}
            justify="center"
            align="center"
          >
            <CircularProgress />
            <Typography align="center">Enviando sua solicitação...</Typography>
          </Container>
        )}
        {popoverStatus === "success" && (
          <Container
            className={classes.popoverStatus}
            justify="center"
            align="center"
          >
            <CheckCircleOutlineIcon
              size="large"
              style={{ color: "green", fontSize: 50 }}
            />
            <Typography paragraph align="center" variant="subtitle2">
              Solicitação realizada com sucesso!
            </Typography>
            <Typography align="center">
              Agora é só aguardar que nossa equipe entrará em contato com você
              para finalizar seu pedido!
            </Typography>
          </Container>
        )}
        {popoverStatus === "fail" && (
          <Container
            className={classes.popoverStatus}
            justify="center"
            align="center"
          >
            <ErrorOutlineIcon
              size="large"
              style={{ color: "red", fontSize: 50 }}
            />
            <Typography paragraph align="center" variant="subtitle2">
              Houve um erro ao submeter sua solicitação!
            </Typography>
            <Typography align="center">
              Mas não desista ainda! Você também pode fazer sua solicitação por
              e-mail! Basta enviar seu pedido para{" "}
              <Link
                href="mailto:certidaoanapolis@gmail.com"
                rel="noreferrer noopener"
                target="_blank"
                style={{ filter: "brightness(.7)" }}
                onClick={handleCloseFormStatus}
              >
                certidaoanapolis@gmail.com
              </Link>
            </Typography>
          </Container>
        )}
      </Popover>
      {isSubmitting && <LinearProgress />}
    </>
  )
}

export default CertidaoPanel
