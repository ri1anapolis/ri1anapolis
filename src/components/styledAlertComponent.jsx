import React from "react"
import { Alert, AlertTitle } from "@material-ui/lab"
import { Fade } from "@material-ui/core"

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
