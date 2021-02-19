import React from "react"
import Alert from "@material-ui/lab/Alert"
import AlertTitle from "@material-ui/lab/AlertTitle"
import Fade from "@material-ui/core/Fade"

const StyledAlertComponent = props => {
  return (
    <Fade in={true}>
      <Alert severity={props.severity} align="left">
        <AlertTitle>{props.title}</AlertTitle>
        {props.children}
      </Alert>
    </Fade>
  )
}

export default StyledAlertComponent
