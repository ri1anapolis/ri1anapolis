import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "40px 10px",
    color: "rgba(255,255,255,1)",
    background:
      "linear-gradient(45deg, rgba(46,108,162,1) 0%, rgba(80,149,138,1) 100%)",
  },
  smallText: {
    fontSize: "12px",
    fontWeight: 400,
  },
}))

const Footer = props => {
  const classes = useStyles(props)
  return (
    <Grid
      container
      className={classes.root}
      alignItems="center"
      justify="space-around"
    >
      <Grid item>
        <Typography className={classes.smallText}>
          Desenvolvido por André Martins
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
