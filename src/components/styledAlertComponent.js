import React, { useState } from "react"
import { Alert, AlertTitle } from "@material-ui/lab"
import { Fade } from "@material-ui/core"

const StyledAlertComponent = props => {
  const [visibility, setVisibility] = useState(true)
  return (
    <Fade in={visibility}>
      <Alert
        severity={props.severity}
        onClose={() => {
          setVisibility(false)
        }}
      >
        <AlertTitle>{props.title}</AlertTitle>
        {props.children}
      </Alert>
    </Fade>
  )
}

export default StyledAlertComponent
