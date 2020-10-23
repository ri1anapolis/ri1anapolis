import React, { useState } from "react"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"

import MenuIcon from "@material-ui/icons/Menu"
import MenuOpenIcon from "@material-ui/icons/MenuOpen"

import useTheme from "@material-ui/styles/useTheme"
import useStyles from "./styles"

import store from "./reduxStore"

const MenuToggler = props => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    store.dispatch({ type: "TOGGLE_MENU" })
  }

  store.subscribe(() => {
    const state = store.getState()
    if ("open" in state) setOpenMenu(state.open)
  })

  return (
    <>
      {useMediaQuery("(min-width:450px) and (max-width:1160px)") ? (
        <Button
          size="large"
          classes={{
            root: classes.headerBarMenuButton,
            endIcon: classes.headerBarMenuButtonEndIcon,
          }}
          endIcon={openMenu ? <MenuOpenIcon /> : <MenuIcon />}
          onClick={toggleMenu}
        >
          menu
        </Button>
      ) : (
        <IconButton aria-label="menu" color="secondary" onClick={toggleMenu}>
          {openMenu ? <MenuOpenIcon /> : <MenuIcon />}
        </IconButton>
      )}
    </>
  )
}

export default MenuToggler
