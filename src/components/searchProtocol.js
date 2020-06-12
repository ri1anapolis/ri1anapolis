import React, { useState, useEffect } from "react"
import { useLazyQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import MaskedInput from "react-text-mask"
import PropTypes from "prop-types"
import { Grid, TextField, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import StyledAlertComponent from "./styledAlertComponent"

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
  query($protocolo: String!) {
    protocolo(query: { protocolo: $protocolo }) {
      etapa
      natureza
      protocolo
      status
    }
  }
`

const StyledTextField = props => {
  const [protocolo, setProtocolo] = useState(null)
  const [searchable, setSearchable] = useState(false)
  const classes = useStyles(props)
  const [runSearch, { loading, error, data }] = useLazyQuery(gqlQuery)

  const handleButtonClick = () => {
    if (searchable) {
      runSearch({ variables: { protocolo } })
    }
    setProtocolo(null)
    return
  }

  const handleEnterKey = event => {
    if (event.key === "Enter") handleButtonClick()
    return
  }

  const handleInputProtocoloChange = event => {
    const protocolo = event.target.value

    if (!!protocolo && protocolo.trim().length >= 8) {
      setProtocolo(protocolo.toUpperCase())
      setSearchable(true)
      return
    }
    setSearchable(false)
  }

  return (
    <>
      <Grid container className={classes.root} justify="space-between">
        <TextField
          onChange={event => handleInputProtocoloChange(event)}
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

      {error && Object.keys(error.networkError).length > 0 && (
        <StyledAlertComponent severity="error" title="Erro de conexão">
          Uma falha na conexão de rede impediu que sua consulta fosse realizada.
        </StyledAlertComponent>
      )}
      {error && Object.keys(error.graphQLErrors).length > 0 && (
        <StyledAlertComponent severity="error" title="Erro de sistema">
          Uma falha de sistema ocorreu. Tente novamente mais tarde.
        </StyledAlertComponent>
      )}

      {data && data.protocolo && (
        <StyledAlertComponent
          severity="success"
          title={
            <>
              Protocolo {data.protocolo.protocolo}{" "}
              <small>({data.protocolo.natureza})</small>
            </>
          }
        >
          Tramita na etapa "{data.protocolo.etapa}": Etiam interdum faucibus
          pulvinar. Sed justo urna, semper scelerisque arcu eu, rutrum semper
          massa. Vestibulum cursus auctor dolor a mattis. Pellentesque nec
          porttitor metus, id egestas lacus.
        </StyledAlertComponent>
      )}

      {data && !data.protocolo && (
        <StyledAlertComponent severity="info">
          O protocolo informado não foi encontrado.
        </StyledAlertComponent>
      )}
    </>
  )
}

export default StyledTextField
