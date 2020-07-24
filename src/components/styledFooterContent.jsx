import React from "react"
import { Grid, Typography, Link } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  link: {
    color: "#fff",
  },
  gridItem: {
    padding: "30px 20px",
    "& > h6": {
      color: "#FFF",
      fontWeight: "600",
      paddingBottom: "20px",
    },
    "& > ul": {
      padding: 0,
      margin: 0,
      listStyleType: "none",
      "& > li": {
        padding: "7px 0",
      },
    },
  },
}))

const StyledFooterContent = props => {
  const classes = useStyles()
  const { title, links } = props
  const listLinks = links.map(link => (
    <li>
      <Link
        href={link.href}
        target={link.target || "_blank"}
        rel={link.rel || "noreferrer"}
        className={classes.link}
      >
        {link.text}
      </Link>
    </li>
  ))
  return (
    <Grid className={classes.gridItem} item xs={12} sm={6} md={4}>
      <Typography variant="subtitle2">{title}</Typography>
      <ul>{listLinks}</ul>
    </Grid>
  )
}

export default StyledFooterContent
