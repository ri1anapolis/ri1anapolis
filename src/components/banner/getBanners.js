import axios from "axios"

const getBanners = async () => {
  try {
    const branch =
      process.env.NODE_ENV === "production" ? "main" : "development"

    const { status, statusText, data } = await axios.get(
      `https://raw.githubusercontent.com/ri1anapolis/ri1anapolis-banners/${branch}/banners.json`,
      {
        timeout: 500,
      }
    )

    if (status !== 200) throw Error(statusText)
    if (branch === "development") console.log(`banners data:`, data)

    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

export default getBanners
