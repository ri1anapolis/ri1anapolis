import React, { useState, useEffect } from "react"
import { useLazyQuery } from "@apollo/react-hooks"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"

import useTheme from "@material-ui/styles/useTheme"
import styles from "./styles"

import store from "../reduxStore"
import gqlQuery from "./searchFormGraphQl"
import ProtocolInputMask from "./protocolInputMask"
import styledSearchButtonFactory from "./styledSearchButtonFactory"
import fistCharIsNaN from "../../../utils/firstCharIsNaN"

const SearchForm = props => {
  const [protocol, setProtocol] = useState(null)
  const [searchable, setSearchable] = useState(false)
  const [runSearch, { loading, error, data }] = useLazyQuery(gqlQuery)

  const theme = useTheme()
  const classes = styles(theme)
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
          inputComponent: ProtocolInputMask,
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

export default SearchForm
