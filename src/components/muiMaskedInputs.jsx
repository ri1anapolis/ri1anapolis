import React from "react"
import MaskedInput from "react-text-mask"
import PropTypes from "prop-types"

function TextMaskCpfCnpj(props) {
  const { inputRef, ...other } = props

  function mask(value) {
    const d = /\d/
    const length = value ? value.replace(/\D/g, "").length : 0
    return length <= 11
      ? [d, d, d, ".", d, d, d, ".", d, d, d, "-", d, d]
      : [d, d, ".", d, d, d, ".", d, d, d, "/", d, d, d, d, "-", d, d]
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

function TextMaskPhone(props) {
  const { inputRef, ...other } = props

  function mask(value) {
    const d = /\d/
    const length = value ? value.replace(/\D/g, "").length : 0
    return length <= 10
      ? ["(", d, d, ")", " ", d, d, d, d, "-", d, d, d, d]
      : ["(", d, d, ")", " ", "9", " ", d, d, d, d, "-", d, d, d, d]
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

TextMaskCpfCnpj.prototype = {
  inputRef: PropTypes.func.isRequired,
}

TextMaskPhone.prototype = {
  inputRef: PropTypes.func.isRequired,
}

export { TextMaskCpfCnpj, TextMaskPhone }
