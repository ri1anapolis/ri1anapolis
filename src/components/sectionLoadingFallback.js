import React from "react"
import { Grid, CircularProgress } from "@material-ui/core"

const SectionLoadingFallback = props => {
  const color = props.color || "gray"
  const height = props.height || "300px"
  const progressIndicatorSize = props.progressIndicatorSize || 50
  const text = props.text || "Carregando mais informações..."
  return (
    <Grid
      container
      xs={12}
      alignContent="center"
      justify="center"
      style={{ minHeight: height }}
    >
      <Grid item container alignContent="center" justify="center">
        <CircularProgress
          thickness={1}
          size={progressIndicatorSize}
          style={{ color: color }}
        />
      </Grid>
      <p style={{ color: color }}>{text}</p>
    </Grid>
  )
}

export default SectionLoadingFallback
