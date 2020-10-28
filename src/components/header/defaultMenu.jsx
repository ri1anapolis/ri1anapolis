import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Grow from "@material-ui/core/Grow"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Link from "@material-ui/core/Link"
import AnchorLink from "react-anchor-link-smooth-scroll"

import useTheme from "@material-ui/styles/useTheme"
import useStyles from "./styles"

import store from "./reduxStore"

const PcMenu = ({ links }) => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const [openMenu, setOpenMenu] = useState(true)

  const handleClick = () => {
    store.dispatch({ type: "CLOSE_MENU" })
  }

  store.subscribe(() => {
    const state = store.getState()
    if ("open" in state) setOpenMenu(!state.open)
  })

  const linksList =
    links?.length > 0
      ? links.map((link, index) => {
          const isAnchor = link.href.split("")[0] === "#"
          const _component = isAnchor ? AnchorLink : "a"
          const _target = link.target || isAnchor ? null : "_blank"
          const _rel = link.rel || isAnchor ? null : "noopener noreferrer"
          const _offset = isAnchor ? "89" : null

          return (
            <Grid key={index} className={classes.defaultMenuContainer} item>
              <Link
                component={_component}
                href={link.href}
                target={_target}
                rel={_rel}
                offset={_offset}
                className={classes.defaultMenuButton}
                onClick={handleClick}
              >
                {link.text}
              </Link>
            </Grid>
          )
        })
      : []

  return (
    <Grow in={openMenu}>
      <Grid item component="nav" container>
        {linksList}
      </Grid>
    </Grow>
  )
}

const DefaultHeaderMenu = ({ links }) => {
  return useMediaQuery("(min-width: 1161px)") ? <PcMenu links={links} /> : <></>
}

export default DefaultHeaderMenu
