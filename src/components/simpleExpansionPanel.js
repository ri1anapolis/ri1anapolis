import React from "react"
import {
  Typography,
  Button,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
} from "@material-ui/core"
import DescriptionIcon from "@material-ui/icons/Description"
import { ExpandMore } from "@material-ui/icons"
import { makeStyles, withStyles } from "@material-ui/styles"

const DownloadButton = withStyles(theme => ({
  root: {
    color: "rgb(75,125,175)",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "rgba(75,125,175,0.05)",
    },
  },
}))(Button)

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 400,
  },
  actionsPanel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}))

const SimplePanelComponent = props => {
  const { title, children, ...other } = props
  const classes = useStyles({ ...props })

  const linksList = props.links || []
  const downloadLinks = linksList.map((link, index) => {
    return (
      <DownloadButton
        key={index}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<DescriptionIcon />}
      >
        {link.text}
      </DownloadButton>
    )
  })

  return (
    <ExpansionPanel {...other}>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Typography
          component="h3"
          variant="subtitle2"
          className={classes.title}
        >
          {title}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography variant="caption">{children}</Typography>
      </ExpansionPanelDetails>
      <ExpansionPanelActions className={classes.actionsPanel}>
        {downloadLinks}
      </ExpansionPanelActions>
    </ExpansionPanel>
  )
}

export default SimplePanelComponent
