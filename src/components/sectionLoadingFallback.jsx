import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"

const SectionLoadingFallback = props => {
  const color = props.color || "gray"
  const height = props.height || "300px"
  const progressIndicatorSize = props.progressIndicatorSize || 50
  const text = props.text || "Carregando mais informações..."
  return (
    <Grid
      container
      alignContent="center"
      justify="center"
      style={{ minHeight: height }}
    >
      <Grid item xs={12} container alignContent="center" justify="center">
        <CircularProgress
          thickness={1}
          size={progressIndicatorSize}
          style={{ color: color }}
        />
      </Grid>
      <Typography align="center" style={{ color: color, marginTop: "20px" }}>
        {text}
      </Typography>
    </Grid>
  )
}

export default SectionLoadingFallback
