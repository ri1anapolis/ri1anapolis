const { MongoClient } = require("mongodb")

const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_DB = process.env.MONGODB_DB
const MONGODB_COLLECTION = process.env.MONGODB_COLLECTION

async function getData(processId) {
  const client = new MongoClient(MONGODB_URI)

  try {
    await client.connect()
    console.log(`::: MongoDB: Connected to server!`)

    const process = await client
      .db(MONGODB_DB)
      .collection(MONGODB_COLLECTION)
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
    console.log(
      `::: MongoDB: Result from "${MONGODB_COLLECTION}" collection on "${MONGODB_DB}" database: `,
      process
    )

    return process
  } catch (error) {
    console.error(`::: MongoDB: ERROR => ${error}`)
  } finally {
    await client.close()
    console.log(`::: MongoDB: Disconnected from server!`)
  }
}

exports.handler = async (event, context, callback) => {
  try {
    const { processId } = JSON.parse(event.body)

    const process = await getData(processId)

    return callback(null, { statusCode: 200, body: JSON.stringify(process) })
  } catch (err) {
    return callback(JSON.stringify(err))
  }
}
