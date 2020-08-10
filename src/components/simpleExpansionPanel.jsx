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

const NoCaseButton = withStyles(theme => ({
  root: {
    textTransform: "none",
    filter: "brightness(.9)",
  },
}))(Button)

const useStyles = makeStyles(theme => ({
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
    const { href, text, target, rel, color, startIcon, ...other } = link
    return (
      <NoCaseButton
        key={index}
        href={href}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        color={color || "primary"}
        startIcon={startIcon || <DescriptionIcon />}
        {...other}
      >
        {text}
      </NoCaseButton>
    )
  })

  return (
    <ExpansionPanel {...other}>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Typography variant="subtitle2" className={classes.title}>
          {title}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>{children}</Typography>
      </ExpansionPanelDetails>
      <ExpansionPanelActions className={classes.actionsPanel}>
        {downloadLinks}
      </ExpansionPanelActions>
    </ExpansionPanel>
  )
}

export default SimplePanelComponent
