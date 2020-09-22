import React from "react"
import { useFormContext } from "react-hook-form"
import TextField from "@material-ui/core/TextField"
import useStyles from "./styles"

const FormTextField = props => {
  const { register, errors, trigger } = useFormContext()
  const classes = useStyles()
  const { name, ...other } = props
  return (
    <TextField
      fullWidth
      className={classes.inputs}
      inputRef={register}
      name={name}
      {...other}
      helperText={errors[name] ? errors[name].message : null}
      error={!!errors[name]}
      onChange={() => {
        trigger(name)
      }}
    />
  )
}

export default FormTextField
