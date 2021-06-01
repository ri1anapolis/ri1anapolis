import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import makeStyles from "@material-ui/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  link: {
    color: "#fff",
  },
  footerSection: {
    padding: "30px 20px 0 20px",
  },
  title: {
    color: "#FFF",
    fontWeight: "600",
    paddingBottom: "20px",
  },
  list: {
    padding: 0,
    margin: 0,
    listStyleType: "none",
    "& > li": {
      padding: "7px 0",
    },
  },
}))

const StyledFooterContent = props => {
  const classes = useStyles()
  const { title, links } = props
  const listLinks = links.map((link, index) => (
    <li key={index}>
      <Link
        href={link.href}
        target={link.target || "_blank"}
        rel={link.rel || "noopener noreferrer"}
        className={classes.link}
      >
        {link.text}
      </Link>
    </li>
  ))
  return (
    <Grid className={classes.footerSection} item xs={12} sm={6} md={4}>
      <Typography variant="subtitle2" className={classes.title}>
        {title}
      </Typography>
      <ul className={classes.list}>{listLinks}</ul>
    </Grid>
  )
}

export default StyledFooterContent
