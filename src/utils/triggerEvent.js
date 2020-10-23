const triggerEvent = (elementNode, eventType, value, focus) => {
  const event = new Event(eventType, { bubbles: true })
  const tracker = elementNode._valueTracker

  const lastValue = elementNode.value
  elementNode.value = value ? value : `${lastValue} `

  if (tracker) tracker.setValue(lastValue)

  elementNode.dispatchEvent(event)
}

export default triggerEvent
