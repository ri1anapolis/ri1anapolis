const debounce = (_function, _wait = 500) => {
  let timer = null
  return () => {
    clearTimeout(timer)
    timer = setTimeout(_function, _wait)
  }
}

export default debounce
