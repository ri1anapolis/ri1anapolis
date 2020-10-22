import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Grid from "@material-ui/core/Grid"
import Slide from "@material-ui/core/Slide"

import useTheme from "@material-ui/styles/useTheme"
import useStyles from "./styles"

import ExtendedMenus from "./extendedMenus"
import store from "./reduxStore"

const MenuBar = props => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const [openMenu, setOpenMenu] = useState(false)

  store.subscribe(() => {
    const state = store.getState()
    if ("open" in state) setOpenMenu(state.open)
  })

  return (
    <AppBar position="fixed" className={classes.exMenuWrapper}>
      <div
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        <Slide direction="down" in={openMenu} style={{ zIndex: -1 }}>
          <Grid container justify="center" className={classes.exMenuContainer}>
            <Grid
              item
              container
              justify="space-evenly"
              style={{ maxWidth: "1260px" }}
            >
              <ExtendedMenus linksGroups={props.linksGroups} />
            </Grid>
            <Grid item xs={12} className={classes.exMenuFooterContainer} />
          </Grid>
        </Slide>
      </div>
    </AppBar>
  )
}

export default MenuBar
