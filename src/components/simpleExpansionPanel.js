import React from "react"
import {
  Typography,
  Button,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
} from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 400,
  },
}))

const SimplePanelComponent = props => {
  const classes = useStyles({ ...props })

  const linksList = props.links || []
  const downloadLinks = linksList.map(link => {
    return (
      <Button component="a" href={link.href}>
        {link.text}
      </Button>
    )
  })

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Typography
          component="h3"
          variant="subtitle2"
          className={classes.title}
        >
          {props.title}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography variant="caption">{props.children}</Typography>
      </ExpansionPanelDetails>
      <ExpansionPanelActions>{downloadLinks}</ExpansionPanelActions>
    </ExpansionPanel>
  )
}

export default SimplePanelComponent
