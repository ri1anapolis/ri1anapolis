function fistCharIsNaN(value) {
  const firstChar = value?.length > 0 ? value.split("")[0] : value
  return isNaN(firstChar)
}

export default fistCharIsNaN
