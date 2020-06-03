import React, { useState } from "react"
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
      width: "260px",
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
  query {
    protocolo(query: { protocolo: "RE-125438" }) {
      etapa
      natureza
      protocolo
      status
    }
  }
`

const StyledTextField = props => {
  const [protocolo, setProtocolo] = useState(null)
  const classes = useStyles(props)
  const [runSearch, { called, loading, error, data }] = useLazyQuery(gqlQuery)

  return (
    <>
      <Grid container className={classes.root} justify="space-between">
        <TextField
          onChange={event => setProtocolo(event.target.value)}
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
          variant="contained"
          color="primary"
          size="small"
          onClick={() => runSearch()}
        >
          {props.buttonText}
        </Button>
      </Grid>
      {<p>{protocolo}</p>}
      {loading && <p>Buscando...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data && (
        <p>
          O protocolo {data.protocolo.protocolo} está com status "
          {data.protocolo.status}".
        </p>
      )}
    </>
  )
}

export default StyledTextField
