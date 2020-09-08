import React, { useState, useEffect } from "react"
import { useLazyQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import MaskedInput from "react-text-mask"
import PropTypes from "prop-types"
import { Grid, TextField, Button } from "@material-ui/core"
import { makeStyles, withStyles, useTheme } from "@material-ui/styles"
import AnchorLink from "react-anchor-link-smooth-scroll"

import createStore from "../utils/simpleRedux"
import StyledAlertComponent from "./styledAlertComponent"
import SectionLoadingFallback from "./sectionLoadingFallback"

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_STATE":
      return { ...state, ...action.state }
    default:
      return state
  }
}

const store = createStore(searchReducer)

const useStyles = makeStyles(theme => ({
  searchContainer: {
    margin: "30px 0",
  },
  searchBox: {
    "& input": {
      width: "280px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}))

const styledSearchButtonFactory = theme => {
  return withStyles(
    {
      root: {
        marginLeft: "20px",
        padding: "4px 20px",
        [theme.breakpoints.down("xs")]: {
          margin: "10px auto",
          width: "100%",
        },
      },
    },
    { withTheme: theme }
  )(Button)
}

function fistCharIsNaN(value) {
  const firstChar = value && value.length > 0 ? value.split("")[0] : value
  return isNaN(firstChar)
}

function TextMaskCustom(props) {
  const { inputRef, ...other } = props

  function mask(value) {
    if (value && value.length > 0) {
      return fistCharIsNaN(value)
        ? [/[CcRrEe]/, /[EeXx]/, "-", /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
        : [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    }
    return [/[CcRrEe\d]/]
  }

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={mask}
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

const SearchForm = props => {
  const [protocol, setProtocol] = useState(null)
  const [searchable, setSearchable] = useState(false)
  const [runSearch, { loading, error, data }] = useLazyQuery(gqlQuery)

  const theme = useTheme()
  const classes = useStyles(theme)
  const SearchButton = styledSearchButtonFactory(theme)

  useEffect(() => {
    if (error)
      console.error(`::: Erro ao buscar protocolo: ${JSON.stringify(error)}`)
  })

  useEffect(() => {
    if (
      !!protocol &&
      ((fistCharIsNaN(protocol) && protocol.trim().length >= 8) ||
        (!fistCharIsNaN(protocol) && protocol.trim().length >= 5))
    ) {
      setProtocol(protocol.toUpperCase().trim())
      setSearchable(true)
      return
    }
    setSearchable(false)
  }, [protocol])

  useEffect(() => {
    store.dispatch({ type: "UPDATE_STATE", state: { loading, error, data } })
  }, [loading, error, data])

  const handleButtonClick = () => {
    if (searchable) {
      const _protocol = fistCharIsNaN(protocol) ? protocol : `RE-${protocol}`
      runSearch({ variables: { protocol: _protocol } })
    }
    setProtocol(null)
    return
  }

  const handleEnterKey = event => {
    if (event.key === "Enter") handleButtonClick()
    return
  }

  return (
    <Grid container className={classes.searchContainer}>
      <TextField
        autoComplete="off"
        onChange={event => setProtocol(event.target.value)}
        onKeyDown={event => handleEnterKey(event)}
        className={classes.searchBox}
        id={props.id}
        label={props.label}
        placeholder={props.placeholder}
        variant="outlined"
        size="small"
        InputProps={{
          inputComponent: TextMaskCustom,
        }}
      />
      <SearchButton
        disabled={!searchable}
        variant="contained"
        color="primary"
        size="small"
        onClick={handleButtonClick}
      >
        {props.buttonText}
      </SearchButton>
    </Grid>
  )
}

const SearchReport = () => {
  const [searchResults, setSearchResults] = useState(store.getState())
  const { error, loading, data } = searchResults

  store.subscribe(() => {
    setSearchResults(store.getState())
  })

  const handleErrors = error => {
    if (error) {
      const { networkError } = error

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
      } else {
        return (
          <StyledAlertComponent severity="error" title="Erro de sistema">
            Uma falha de sistema ocorreu. Tente novamente mais tarde.
            <br />
            Caso já tenha visto essa mensagem anteriormente,{" "}
            <AnchorLink
              href="#contato"
              offset="89"
              style={{ color: "#611A15" }}
            >
              entre em contato
            </AnchorLink>{" "}
            e nos informe!
          </StyledAlertComponent>
        )
      }
    }

    return
  }
  return (
    <>
      {!error && !data && <></>}

      {loading && (
        <SectionLoadingFallback
          height="200px"
          color="primary"
          text="Buscando informações do seu protocolo no banco de dados"
        />
      )}

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
          <AnchorLink href="#contato" offset="89" style={{ color: "#0D3C61" }}>
            canais de atendimento.
          </AnchorLink>
        </StyledAlertComponent>
      )}
    </>
  )
}

export default SearchForm
export { SearchReport }
