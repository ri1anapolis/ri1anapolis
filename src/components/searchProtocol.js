import React, { useState, useEffect } from "react"
import { useLazyQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import MaskedInput from "react-text-mask"
import PropTypes from "prop-types"
import { Grid, TextField, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

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
    return
  }

  const handleKeyDown = event => {
    if (event.key === "Enter") handleButtonClick()
    return
  }

  useEffect(() => {
    if (!!protocolo && protocolo.trim().length >= 8) {
      setSearchable(true)
      return
    }
    setSearchable(false)
  }, [protocolo])

  return (
    <>
      <Grid container className={classes.root} justify="space-between">
        <TextField
          onChange={event => setProtocolo(event.target.value)}
          onKeyDown={event => handleKeyDown(event)}
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
      </Grid>
      {loading && <p>Buscando...</p>}
      {error && Object.keys(error.networkError).length > 0 && (
        <p>
          Uma falha na conexão de rede impediu que sua consulta fosse realizada.
        </p>
      )}
      {error && Object.keys(error.graphQLErrors).length > 0 && (
        <p>Uma falha de sistema ocorreu. Tente novamente mais tarde.</p>
      )}
      {data && data.protocolo && (
        <>
          <p>
            Protocolo "{data.protocolo.protocolo}" ({data.protocolo.natureza})
          </p>
          <p>
            Tramita na etapa "{data.protocolo.etapa}": O protocolo está sendo
            analisado...
          </p>
        </>
      )}
      {data && !data.protocolo && <p>O protocolo não foi encontrado.</p>}
      {data && <p>{JSON.stringify(data)}</p>}
    </>
  )
}

export default StyledTextField
