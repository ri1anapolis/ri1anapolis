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
import DefaultIcon from "@material-ui/icons/BlurOn"

const StyledTimeline = withStyles(themes => ({
  root: {
    padding: 0,
  },
}))(Timeline)

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
    textAlign: "left",
  },
}))(Paper)

function StyledTimelineItems(items) {
  const itemsSize = items.length

  const timelineItems = items.map((item, index) => {
    const lastItem = index + 1 === itemsSize ? false : true
    return (
      <StyledTimelineItem key={index}>
        <TimelineSeparator>
          <TimelineDot variant="outlined">
            {(!!item.icon && item.icon) || <DefaultIcon color="grey" />}
          </TimelineDot>
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

  return timelineItems
}

const StyledTimelineComponent = props => {
  const timelineItems = StyledTimelineItems(props.items)

  return <StyledTimeline>{timelineItems}</StyledTimeline>
}

export default StyledTimelineComponent
