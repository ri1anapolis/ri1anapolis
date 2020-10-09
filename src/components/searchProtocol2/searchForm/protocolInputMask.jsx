import React from "react"
import MaskedInput from "react-text-mask"
import PropTypes from "prop-types"

import fistCharIsNaN from "../../../utils/firstCharIsNaN"

function ProtocolInputMask(props) {
  const { inputRef, ...other } = props

  function mask(value) {
    if (value && value.length > 0) {
      return fistCharIsNaN(value)
        ? [/[CcRrEe]/, /[EeXx]/, "-", /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
        : [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    }
    return [/[CcRrEe\d]/]
  }

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={mask}
      placeholderChar={"\u2000"}
    />
  )
}

ProtocolInputMask.prototype = {
  inputRef: PropTypes.func.isRequired,
}

export default ProtocolInputMask
