import { dateString } from "../utils/dateStringHelper"
import getRandomIntInclusive from "../utils/getRandomIntInclusive"

const defaultParams = {
  record: !getRandomIntInclusive(0, 4), // 0-4, five numbers, 20% chance
  expire: dateString(),
}
const handleParamsStore = (name, params = defaultParams) => {
  const savedParams = localStorage.getItem(name)

  if (savedParams) {
    const paramsObj = JSON.parse(savedParams)
    const expirationDate = new Date(dateString(paramsObj.expire)).getTime()
    const todayDate = new Date(dateString()).getTime()

    if (expirationDate >= todayDate) return paramsObj
    console.info("LogRocket recording params expired!")
  }

  const paramsJson =
    typeof params === "string" ? params : JSON.stringify(params)
  localStorage.setItem(name, paramsJson)
  console.info(
    `New LogRocket recording params were saved!\nRecording: ${params.record}.`
  )
  return params
}

export default handleParamsStore
