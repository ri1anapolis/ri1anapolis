const { MongoClient } = require("mongodb")

const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_DB = process.env.MONGODB_DB

async function getData(processId) {
  console.info("URI: ", MONGODB_URI)
  console.info("DB: ", MONGODB_DB)

  const client = new MongoClient(MONGODB_URI)

  try {
    await client.connect()
    console.log(`::: MongoDB: Connected to server!`)

    const process = await client
      .db(MONGODB_DB)
      .collection("processes")
      .aggregate([
        {
          $match: {
            name: processId,
          },
        },
        {
          $lookup: {
            from: "steps",
            localField: "step",
            foreignField: "step_id",
            as: "step",
          },
        },
        {
          $lookup: {
            from: "requirements_notes",
            localField: "name",
            foreignField: "_id",
            as: "requirements_notes",
          },
        },
      ])
      .toArray()

    console.log(`::: MongoDB: Result from "${MONGODB_DB}" database: `, process)

    return process
  } catch (error) {
    console.error(`::: MongoDB: ERROR => ${error}`)
    throw error
  } finally {
    await client.close()
    console.log(`::: MongoDB: Disconnected from server!`)
  }
}

// Node.js 24+ Lambda runtimes reject callback-style handlers: async handlers
// must return the response object instead.
exports.handler = async event => {
  try {
    const { processId } = JSON.parse(event.body)

    const process = await getData(processId)

    return { statusCode: 200, body: JSON.stringify(process) }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: String(err?.message || err) }),
    }
  }
}
