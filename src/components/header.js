import React from "react"
import { Box, Typography, Grid, makeStyles } from "@material-ui/core"
import MenuButton from "./navigationMenuButton"

const useStyles = makeStyles(theme => ({
  navigationMenu: {
    "& a": {
      [theme.breakpoints.down("sm")]: {
        margin: "2px",
      },
      [theme.breakpoints.up("sm")]: {
        margin: "10px",
      },
    },
  },
  headerContainer: {
    height: "615px",
    color: "rgba(255,255,255,1)",
    background:
      "linear-gradient(45deg, rgba(80,149,138,1) 0%, rgba(46,108,162,1) 100%)",
  },
  headerContent: {
    height: "615px",
    padding: "20px 10px",
  },
  headerImg: {
    width: "105px",
    height: "130px",
    filter: "invert(1)",
  },
}))

const HeaderComponent = props => {
  const { links, title, description, logo, id } = props
  const classes = useStyles(props)
  const linksList = links.map((link, index) => {
    return <MenuButton key={index} href={link.href} text={link.text} />
  })

  return (
    <>
      <Box component="header" id={id} className={classes.headerContainer}>
        <Grid
          container
          direction="column"
          justify="space-around"
          className={classes.headerContent}
        >
          <Grid item container justify="space-around">
            <img src={logo} alt="logo" className={classes.headerImg} />
          </Grid>

          <Grid item>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              className={classes.lightText}
            >
              {title}
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="subtitle2" align="center" gutterBottom>
              {description}
            </Typography>
          </Grid>

          <Grid
            item
            component="nav"
            container
            justify="center"
            className={classes.navigationMenu}
          >
            {linksList}
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default HeaderComponent
