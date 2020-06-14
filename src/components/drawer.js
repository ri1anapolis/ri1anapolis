import React from "react"
import { Drawer } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  scroller: {
    "& > div": {
      overflowX: "hidden",
      scrollbarWidth: "thin",
      "&::-webkit-scrollbar": {
        width: "6px",
        height: "6px",
        backgroundColor: "#F5F5F5",
        overflowX: "auto",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,.3)",
        backgroundColor: "#f0f0f0",
        overflowX: "auto",
      },
    },
  },
  content: {
    width: "350px",
    height: "100%",
    padding: "20px 10px",
    background: "#f3f3f3",
  },
}))

const DrawerComponent = props => {
  const classes = useStyles({ ...props })
  return (
    <Drawer {...props} className={classes.scroller}>
      <div className={classes.content}>{props.children}</div>
    </Drawer>
  )
}

export default DrawerComponent
