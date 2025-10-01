import React, { useState, useEffect } from "react"
import { useLazyQuery } from "@apollo/react-hooks"
import LogRocketMate from "../../../services/LogRocketMate"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"

import useTheme from "@material-ui/styles/useTheme"
import styles from "./styles"

import store from "../reduxStore"
import gqlQuery from "./searchFormGraphQl"
import styledSearchButtonFactory from "./styledSearchButtonFactory"

const SearchForm = props => {
  const [protocol, setProtocol] = useState("")
  const [searchable, setSearchable] = useState(false)
  const [runSearch, { loading, error, data }] = useLazyQuery(gqlQuery)

  const theme = useTheme()
  const classes = styles(theme)
  const SearchButton = styledSearchButtonFactory(theme)

  const handleInputChange = event => {
    event.preventDefault()
    const _input = event.currentTarget.value?.replace(/[^0-9]/g, "") || ""
    setProtocol(_input)

    if (_input?.length >= 5) {
      setSearchable(true)
      return
    }
    searchable && setSearchable(false)
  }

  const handleEnterKey = event => {
    if (event.key === "Enter") handleButtonClick()
  }

  const handleButtonClick = () => {
    const protocolObject = { protocol: `RE-${protocol}` }

    if (searchable) runSearch({ variables: protocolObject })
    setProtocol("")

    LogRocketMate("track", "procolo", protocolObject)
  }

  useEffect(() => {
    store.dispatch({ type: "UPDATE_STATE", state: { loading, error, data } })

    if (error)
      console.error(`::: Erro ao buscar protocolo: ${JSON.stringify(error)}`)
  }, [loading, error, data])

  return (
    <Grid container className={classes.searchContainer}>
      <TextField
        disabled={true}
        value={protocol}
        autoComplete="off"
        onChange={handleInputChange}
        onKeyDown={handleEnterKey}
        className={classes.searchBox}
        id={props.id}
        label={props.label}
        placeholder={props.placeholder}
        variant="outlined"
        size="small"
        inputProps={{ inputMode: "numeric" }}
      />
      <SearchButton
        disabled={true || !searchable}
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
