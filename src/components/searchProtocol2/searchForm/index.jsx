import React, { useState } from "react"
import LogRocketMate from "../../../services/LogRocketMate"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"

import useTheme from "@material-ui/styles/useTheme"
import styles from "./styles"

import store from "../reduxStore"
import styledSearchButtonFactory from "./styledSearchButtonFactory"
import findOnDb from "../../../utils/find-on-db"

const SearchForm = props => {
  const [protocol, setProtocol] = useState("")
  const [searchable, setSearchable] = useState(false)

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

  const handleButtonClick = async () => {
    const validProtocol = `RE-${protocol}`

    if (searchable) {
      store.dispatch({
        type: "UPDATE_STATE",
        state: { loading: true, error: undefined, data: undefined },
      })
      const data = await findOnDb(validProtocol)
      store.dispatch({
        type: "UPDATE_STATE",
        state: { loading: false, error: undefined, data },
      })
      LogRocketMate("track", "procolo", data)
    }
    setProtocol("")
  }

  return (
    <Grid container className={classes.searchContainer}>
      <TextField
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
