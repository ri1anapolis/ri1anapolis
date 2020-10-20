import React from "react"
import Chip from "@material-ui/core/Chip"

import useStyles from "./styles"

const Hint = props => {
  const { label, variant, size, ...other } = props
  const _size = size || "small"
  const _variant = variant || "outlined"
  const classes = useStyles()

  return (
    <Chip
      label={label}
      size={_size}
      variant={_variant}
      {...other}
      className={classes.hint}
    />
  )
}

export default Hint
