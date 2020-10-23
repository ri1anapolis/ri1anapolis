import React, { useState } from "react"
import { useFormContext } from "react-hook-form"
import TextField from "@material-ui/core/TextField"
import Collapse from "@material-ui/core/Collapse"
import useStyles from "./styles"

import Hint from "./formHint"
import triggerEvent from "../../utils/triggerEvent"

const AddHints = (hints, showHints, inputName) => {
  const { getValues } = useFormContext()

  if (hints?.length > 0) {
    const hintsComponents = hints.map(hint => {
      const { label } = hint

      const handleClick = event => {
        const addValue = `${getValues(inputName)}\n- ${label}`.trim()
        const input = document.getElementsByName(inputName)[0]

        input.focus()
        triggerEvent(input, "input", addValue)
        event.currentTarget.style.display = "none"
      }

      return <Hint key={label} {...hint} onClick={handleClick} />
    })

    return <Collapse in={showHints}>{hintsComponents}</Collapse>
  }
  return
}

const FormTextField = props => {
  const { register, errors, trigger } = useFormContext()
  const [showHints, setShowHints] = useState(false)
  const classes = useStyles()
  const { name, onChange, hints, ...other } = props

  const handleChange = event => {
    if (typeof onChange === "function") onChange(event)
    trigger(name)
  }

  const handleFocus = () => {
    setShowHints(true)
  }

  return (
    <>
      <TextField
        fullWidth
        name={name}
        helperText={errors[name] ? errors[name].message : null}
        error={!!errors[name]}
        inputRef={register}
        className={classes.inputs}
        {...other}
        onFocus={handleFocus}
        onChange={handleChange}
      />
      {AddHints(hints, showHints, name)}
    </>
  )
}

export default FormTextField
