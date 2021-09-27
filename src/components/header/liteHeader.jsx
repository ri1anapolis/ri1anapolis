import React from "react"
import useTheme from "@material-ui/styles/useTheme"
import HeaderBar from "./headerBar"
import useStyles from "./styles"

export default function LiteHeader(props) {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <>
      <div className={classes.headerPlaceholder} id={props.id} />
      <HeaderBar />
    </>
  )
}
