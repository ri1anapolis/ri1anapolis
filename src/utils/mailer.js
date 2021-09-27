import axios from "axios"
import formatMailPayload from "./formatMailPayload"

async function mailer(data) {
  const instance =
    process.env.NODE_ENV !== "production"
      ? axios.create({
          baseURL: "http://localhost:8888", //local netlify dev
        })
      : axios

  const requestUrl = `/.netlify/functions/mailer`

  try {
    const { status } = await instance.post(requestUrl, formatMailPayload(data))
    return { status }
  } catch (error) {
    return { error }
  }
}

export default mailer
