import React from "react"
import { Grid, Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  menuButton: {
    background: "rgba(255,255,255,0)",
    border: "1px solid white",
    color: "white",
    fontSize: "18px",
    transition: 0.3,
    "&:hover": {
      background: "rgba(255,255,255,0.2)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80vw",
    },
    [theme.breakpoints.up("sm")]: {
      width: "180px",
      height: "50px",
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
          variant="outlined"
          size="large"
          className={classes.menuButton}
          href={props.href}
        >
          {props.text}
        </Button>
      </Grid>
    </>
  )
}

export default MenuButton
