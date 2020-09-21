import React from "react"
import { Button as MuiButton } from "@material-ui/core"
import makeStyles from "@material-ui/styles/makeStyles"
import useTheme from "@material-ui/styles/useTheme"

const useStyles = makeStyles(theme => ({
  button: {
    margin: "5px auto",
    padding: "6px 30px",
    "&+button, +a": {
      marginLeft: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: "6px 0",
      "&+button, +a": {
        marginLeft: "0",
      },
    },
  },
}))

const Button = props => {
  const { children, ...other } = props
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <MuiButton {...other} className={classes.button}>
      {children}
    </MuiButton>
  )
}

export default Button
