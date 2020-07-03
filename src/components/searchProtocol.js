import React, { useState, useEffect } from "react"
import { useLazyQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import MaskedInput from "react-text-mask"
import PropTypes from "prop-types"
import { Grid, TextField, Button, Link } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import StyledAlertComponent from "./styledAlertComponent"
import smoothScroll from "../utils/smoothScroll"

const useStyles = makeStyles(theme => ({
  root: {
    margin: "30px 0",
    width: "400px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  searchbox: {
    "& input": {
      width: "280px",
      [theme.breakpoints.down("xs")]: {
        width: "calc(75vw - 70px)",
      },
    },
  },
}))

function TextMaskCustom(props) {
  const { inputRef, ...other } = props

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={[/[CcRr]/, /[Ee]/, "-", /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={"\u2000"}
    />
  )
}

TextMaskCustom.prototype = {
  inputRef: PropTypes.func.isRequired,
}

const gqlQuery = gql`
  query($protocol: String!) {
    process(query: { name: $protocol }) {
      name
      status
      email
      step {
        description
        name
      }
    }
  }
`

const StyledTextField = props => {
  const [protocol, setProtocol] = useState(null)
  const [searchable, setSearchable] = useState(false)
  const classes = useStyles(props)
  const [runSearch, { loading, error, data }] = useLazyQuery(gqlQuery)

  const handleErrors = error => {
    if (error) {
      const { graphQLErrors, networkError } = error

      if (graphQLErrors && graphQLErrors.length > 0) {
        return (
          <StyledAlertComponent severity="error" title="Erro de sistema">
            Uma falha de sistema ocorreu. Tente novamente mais tarde.
            <br />
            Caso já tenha visto essa mensagem anteriormente,{" "}
            <Link
              href="#contato"
              color="secondary"
              onClick={event => smoothScroll(event)}
            >
              <strong>entre em contato</strong>
            </Link>{" "}
            e nos informe!
          </StyledAlertComponent>
        )
      }

      if (networkError && networkError.length > 0) {
        return (
          <StyledAlertComponent severity="error" title="Erro de conexão">
            Uma falha na conexão de rede impediu que sua consulta fosse
            realizada.
            <br />
            Verifique se sua conexão com a internet está ativa ou se há algum
            firewall bloqueando a conexão.
          </StyledAlertComponent>
        )
      }
    }
    return
  }

  const handleButtonClick = () => {
    if (searchable) {
      runSearch({ variables: { protocol } })
    }
    setProtocol(null)
    return
  }

  const handleEnterKey = event => {
    if (event.key === "Enter") handleButtonClick()
    return
  }

  useEffect(() => {
    if (error)
      console.log(`::: Erro ao buscar protocolo: ${JSON.stringify(error)}`)
  })

  useEffect(() => {
    if (!!protocol && protocol.trim().length >= 8) {
      setProtocol(protocol.toUpperCase().trim())
      setSearchable(true)
      return
    }
    setSearchable(false)
  }, [protocol])

  return (
    <>
      <Grid container className={classes.root} justify="space-between">
        <TextField
          onChange={event => setProtocol(event.target.value)}
          onKeyDown={event => handleEnterKey(event)}
          className={classes.searchbox}
          id={props.id}
          label={props.label}
          placeholder={props.placeholder}
          variant="outlined"
          size="small"
          InputProps={{
            inputComponent: TextMaskCustom,
          }}
        />
        <Button
          disabled={!searchable}
          variant="contained"
          color="primary"
          size="small"
          onClick={() => handleButtonClick()}
        >
          {props.buttonText}
        </Button>
        {loading && <small>Buscando...</small>}
      </Grid>

      {error && handleErrors(error)}

      {data && data.process && (
        <StyledAlertComponent
          severity="success"
          title={
            <>
              <strong>Protocolo {data.process.name}</strong> - Etapa:{" "}
              {data.process.step.name}
            </>
          }
        >
          {data.process.step.description}
          {data.process.email && (
            <>
              <br />
              <br />
              E-mail cadastrado: "{data.process.email}"
            </>
          )}
          {data.process.status && (
            <>
              <br />
              <br />
              <strong>Atenção</strong>: Seu protocolo possui a seguinte
              observação: "{data.process.status}".
              <br />
              Essa situação pode indicar que existe algum problema com o
              andamento do seu processo. Caso não saiba o que isso significa,{" "}
              <Link
                href="#contato"
                style={{ color: "green" }}
                onClick={event => smoothScroll(event)}
              >
                entre em contato
              </Link>{" "}
              com o cartório.
            </>
          )}
        </StyledAlertComponent>
      )}

      {data && !data.process && (
        <StyledAlertComponent
          severity="info"
          title="O protocolo informado não foi encontrado!"
        >
          Isso pode ocorrer caso o protocolo tenha sido finalizado há muito
          tempo ou tenha ocorrido uma falha de sincronização com o servidor do
          cartório.
          <br />
          <br />
          Caso acredite que isso é um erro, entre em contato conosco pelos
          nossos{" "}
          <Link href="#contato" onClick={event => smoothScroll(event)}>
            <strong>canais de atendimento</strong>
          </Link>
          .
        </StyledAlertComponent>
      )}
    </>
  )
}

export default StyledTextField
