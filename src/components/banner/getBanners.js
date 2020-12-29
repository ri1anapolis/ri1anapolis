import axios from "axios"

const getBanners = async () => {
  try {
    const { status, statusText, data } = await axios.get(
      `https://raw.githubusercontent.com/ri1anapolis/ri1anapolis-banners/main/banners.json`,
      {
        timeout: 500,
      }
    )
    if (status !== 200) throw Error(statusText)
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

export default getBanners
