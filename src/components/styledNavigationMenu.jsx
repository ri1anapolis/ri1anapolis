import React, { useState } from "react"
import { Grid, useMediaQuery } from "@material-ui/core"
import { Menu, MenuItem, IconButton } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/styles"
import MenuIcon from "@material-ui/icons/Menu"
import AnchorLink from "react-anchor-link-smooth-scroll"

const useStyles = makeStyles(theme => ({
  mobileLink: {
    transition: "0.4s",
    "&:hover": {
      background: "#f0f0f0",
    },
    "& > a": {
      textDecoration: "none",
      color: "#252220",
    },
  },
  menuContainer: {
    maxWidth: "200px",
    marginLeft: "calc(2vw + 3px)",
  },
  menuButton: {
    fontSize: "0.91rem",
    wordWrap: "",
    color: "#5f3f09",
    textDecoration: "none",
    borderTop: "1px solid #caa36a",
    padding: "10px 20px",
    borderRadius: 0,
    transition: "0.4s",
    "&:hover": {
      borderTop: "1px solid #252220",
      color: "#252220",
    },
  },
}))

const MenuButton = props => {
  const classes = useStyles()

  return (
    <>
      <Grid className={classes.menuContainer} item>
        <AnchorLink
          offset="89"
          className={classes.menuButton}
          href={props.href}
        >
          {props.text}
        </AnchorLink>
      </Grid>
    </>
  )
}

const MobileMenu = ({ links, popoverContainerId }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handlePopover = () => document.getElementById(popoverContainerId)

  const linksList =
    links && links.length > 0
      ? links.map((link, index) => {
          return (
            <MenuItem
              key={index}
              href={link.href}
              onClick={handleClose}
              className={classes.mobileLink}
            >
              <AnchorLink offset="89" href={link.href}>
                {link.text}
              </AnchorLink>
            </MenuItem>
          )
        })
      : []

  return (
    <Grid item component="nav" container alignItems="center" justify="flex-end">
      <IconButton
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        marginThreshold="30"
        id="menu"
        container={handlePopover}
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
      >
        {linksList}
      </Menu>
    </Grid>
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

const NavigationMenu = ({ links, popoverContainerId }) => {
  const theme = useTheme()
  const notMobile = useMediaQuery(theme.breakpoints.up("md"))

  return notMobile ? (
    <PcMenu links={links} />
  ) : (
    <MobileMenu links={links} popoverContainerId={popoverContainerId} />
  )
}

export default NavigationMenu
