import React from "react"
import { Grid, Button, makeStyles } from "@material-ui/core"
import smoothScroll from "../utils/smoothScroll"

const useStyles = makeStyles(theme => ({
  menuButton: {
    color: "#FFF",
    borderTop: "1px solid #343434",
    borderRadius: 0,
    transition: 0.3,
    "&:hover": {
      borderTop: "1px solid #FBC403",
      color: "#FBC403",
    },
  },
}))

const MenuButton = props => {
  const classes = useStyles(props)
  return (
    <>
      <Grid item>
        <Button
          component="a"
          className={classes.menuButton}
          href={props.href}
          onClick={event => smoothScroll(event)}
        >
          {props.text}
        </Button>
      </Grid>
    </>
  )
}

export default MenuButton
