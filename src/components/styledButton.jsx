import React from "react"
import { Button as MuiButton } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  button: {
    margin: "5px auto",
    padding: "6px 30px",
    "&+ button": {
      marginLeft: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      "&+ button": {
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
