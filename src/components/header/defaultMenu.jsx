import React from "react"
import Grid from "@material-ui/core/Grid"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import AnchorLink from "react-anchor-link-smooth-scroll"

import useTheme from "@material-ui/styles/useTheme"
import useStyles from "./styles"

import store from "./reduxStore"

const MenuButton = props => {
  const theme = useTheme()
  const classes = useStyles(theme)

  const handleClick = () => {
    store.dispatch({ type: "CLOSE_MENU" })
  }

  return (
    <>
      <Grid className={classes.defaultMenuContainer} item>
        <AnchorLink
          offset="89"
          className={classes.defaultMenuButton}
          href={props.href}
          onClick={handleClick}
        >
          {props.text}
        </AnchorLink>
      </Grid>
    </>
  )
}

const PcMenu = ({ links }) => {
  const linksList =
    links && links.length > 0
      ? links.map((link, index) => {
          return <MenuButton key={index} href={link.href} text={link.text} />
        })
      : []
  return (
    <Grid item component="nav" container>
      {linksList}
    </Grid>
  )
}

const DefaultHeaderMenu = ({ links }) => {
  const theme = useTheme()
  const notMobile = useMediaQuery(theme.breakpoints.up("md"))

  return notMobile ? <PcMenu links={links} /> : <></>
}

export default DefaultHeaderMenu
