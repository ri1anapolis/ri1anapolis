import React from "react"
import { Paper, Typography } from "@material-ui/core"
import { withStyles } from "@material-ui/styles"
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@material-ui/lab"

const StyledTimelineItem = withStyles(theme => ({
  missingOppositeContent: {
    "&::before": {
      content: "none",
    },
  },
}))(TimelineItem)

const StyledPaper = withStyles(theme => ({
  root: {
    padding: "6px 10px",
    color: "rgb(85, 85, 85)",
    marginBottom: "10px",
  },
}))(Paper)

function styledTimelineItems(items) {
  const itemsSize = items.length

  const timelineItens = items.map((item, index) => {
    const lastItem = index + 1 === itemsSize ? false : true
    return (
      <StyledTimelineItem key={index}>
        <TimelineSeparator>
          <TimelineDot />
          {lastItem && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <StyledPaper elevation={3}>
            <Typography variant="subtitle2">{item.title}</Typography>
            <Typography variant="caption">{item.description}</Typography>
          </StyledPaper>
        </TimelineContent>
      </StyledTimelineItem>
    )
  })

  return timelineItens
}

const StyledTimelineComponent = props => {
  const timelineItems = styledTimelineItems(props.items)

  return <Timeline>{timelineItems}</Timeline>
}

export default StyledTimelineComponent
