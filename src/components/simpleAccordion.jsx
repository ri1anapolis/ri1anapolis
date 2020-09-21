import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import makeStyles from "@material-ui/styles/makeStyles"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import DescriptionIcon from "@material-ui/icons/Description"

const useStyles = makeStyles({
  root: {
    width: "100%",
    borderRadius: "0",
    transition: "linear 0.1s",
  },
  title: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
    padding: "16px 20px",
    position: "relative",
    background: "inherit",
    border: "inherit",
    textAlign: "left",
    outline: "none",
    "&> div.icon": {
      position: "absolute",
      top: "16px",
      right: "20px",
    },
    "&> p": {
      maxWidth: "80%",
    },
  },
  details: {
    width: "100%",
    height: "100%",
    padding: "16px 20px",
  },
  button: {
    borderRadius: "20px",
    padding: "2px 0",
    fontSize: "0.9rem",
    textTransform: "none",
  },
})

const Accordion = props => {
  const classes = useStyles()
  const [showDetails, setShowDetails] = useState(false)
  const { title, description, links, ...other } = props

  const toggleAccordion = () => setShowDetails(!showDetails)

  const actionsLinks =
    links?.length > 0
      ? links.map((link, index) => {
          const { href, text, target, rel, color, startIcon, ...other } = link
          return (
            <Button
              size="small"
              key={index}
              href={href}
              target={target || "_blank"}
              rel={rel || "noopener noreferrer"}
              color={color || "primary"}
              startIcon={startIcon || <DescriptionIcon />}
              className={classes.button}
              {...other}
            >
              {text}
            </Button>
          )
        })
      : []

  return (
    <Paper
      elevation={1}
      className={classes.root}
      {...other}
      style={{
        marginTop: showDetails ? "7px" : "1px",
        marginBottom: showDetails ? "7px" : 0,
      }}
    >
      <button className={classes.title} onClick={toggleAccordion}>
        <Typography>{title}</Typography>
        <div className="icon">
          <ExpandMoreIcon
            style={{ transform: showDetails && "rotate(90deg)" }}
          />
        </div>
      </button>
      {showDetails && (
        <div className={classes.details}>
          {description && (
            <Typography paragraph variant="caption">
              {description}
            </Typography>
          )}
          {actionsLinks.length > 0 && (
            <Grid item container direction="column" alignItems="flex-start">
              {actionsLinks}
            </Grid>
          )}
        </div>
      )}
    </Paper>
  )
}

export default Accordion
