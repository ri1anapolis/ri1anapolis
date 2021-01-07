function parseDate(date) {
  return date ? new Date(date) : new Date()
}

function dateString(date) {
  return parseDate(date).toISOString().slice(0, 10)
}

export { parseDate, dateString }
