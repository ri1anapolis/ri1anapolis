import React, { forwardRef } from "react"
import Button from "@material-ui/core/Button"
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

const StyledButton = forwardRef((props, ref) => {
  const { children, ...other } = props
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <Button ref={ref} {...other} className={classes.button}>
      {children}
    </Button>
  )
})

export default StyledButton
