import axios from "axios"

async function findOnDb(processId) {
  const instance =
    process.env.NODE_ENV !== "production"
      ? axios.create({
          baseURL: "http://localhost:8888", //local netlify dev
        })
      : axios

  const requestUrl = `/.netlify/functions/db`

  try {
    const response = await instance.post(requestUrl, { processId })
    return response.data
  } catch (error) {
    console.error("error on call to db function: ", error)
    return { error }
  }
}

export default findOnDb
