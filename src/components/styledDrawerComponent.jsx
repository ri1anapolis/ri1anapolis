import React, { useState, useEffect } from "react"
import { Drawer } from "@material-ui/core"
import { makeStyles, withStyles } from "@material-ui/styles"
import createStore from "../utils/simpleRedux"

const MuiDrawer = withStyles(themes => ({
  paper: {
    background: "#f3f3f3",
  },
}))(Drawer)

const useStyles = makeStyles(theme => ({
  drawer: {
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
}))

const drawerReducer = (state = {}, action) => {
  const newState = { ...state }
  const toggleAction =
    newState[action.id] !== "undefined" ? !newState[action.id] : true

  switch (action.type) {
    case "TOGGLE_DRAWER":
      newState[action.id] = toggleAction
      return newState

    case "CLOSE_DRAWER":
      newState[action.id] = false
      return newState

    default:
      return newState
  }
}

const store = createStore(drawerReducer)

const StyledDrawer = props => {
  const classes = useStyles({ ...props })
  const { id, children } = props

  const initialState = {}
  initialState[id] = false

  const [drawerStore, setDrawerStore] = useState(initialState)

  store.subscribe(() => {
    setDrawerStore(store.getState())
  })

  function handleCloseDrawer() {
    store.dispatch({ type: "CLOSE_DRAWER", id })
  }

  useEffect(() => {
    if (drawerStore[id]) {
      window.history.pushState(null, document.title, document.location.href)
      window.addEventListener("popstate", handleCloseDrawer, {
        passive: true,
      })
    }
    return () =>
      window.removeEventListener("popstate", handleCloseDrawer, {
        passive: true,
      })
  })

  return (
    <MuiDrawer
      id={id}
      open={drawerStore[id]}
      onClose={handleCloseDrawer}
      {...props}
      className={classes.drawer}
    >
      {children}
    </MuiDrawer>
  )
}

const useDrawerToggler = () => {
  return id => () => {
    store.dispatch({ type: "TOGGLE_DRAWER", id })
  }
}

export default StyledDrawer
export { useDrawerToggler }
