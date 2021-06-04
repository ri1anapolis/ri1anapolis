import React from "react"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Tooltip from "@material-ui/core/Tooltip"
import IconButton from "@material-ui/core/IconButton"
import withStyles from "@material-ui/styles/withStyles"

const LightTooltip = withStyles(theme => ({
  arrow: {
    color: theme.palette.common.white,
  },
  tooltip: {
    padding: "15px",
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[8],
    fontSize: 11,
  },
}))(Tooltip)

const InfoIconButton = withStyles(theme => ({
  root: {
    marginLeft: "5px",
    transition: "color .1s ease .1s",
    "&:hover": {
      color: theme.palette.info.light,
    },
    "&:active": {
      transition: "color 4s cubic-bezier(0.05,0.05,0.05,0.05)",
      color: theme.palette.info.light,
    },
  },
}))(IconButton)

const buttonStyle = {
  textTransform: "none",
  fontWeight: "normal",
}

const HelpIconButton = props => {
  const { tooltipTitle, link, Icon } = props
  return (
    <LightTooltip
      title={
        <div>
          <Typography align="center" paragraph>
            {tooltipTitle}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={buttonStyle}
            href={link?.url ?? "#"}
            target={link?.target ?? "_blank"}
            rel={link?.rel ?? "noreferrer noopener"}
          >
            {link?.text ?? "Error"}
          </Button>
        </div>
      }
      arrow={true}
      interactive={true}
      leaveDelay={100}
      enterTouchDelay={0}
      leaveTouchDelay={4000}
    >
      <InfoIconButton size="small">{Icon}</InfoIconButton>
    </LightTooltip>
  )
}

export default HelpIconButton
