const isAbleToGather = () => {
  const savedParams = localStorage.getItem(
    process.env.GATSBY_LOGROCKET_LOCAL_STORAGE
  )

  if (savedParams) {
    const { record } = JSON.parse(savedParams)
    return record
  }

  return null
}

async function LogRocketMate(callback, ...args) {
  if (isAbleToGather) {
    const { default: LogRocket } = await import("logrocket")
    LogRocket[callback](...args)
  }
}

export default LogRocketMate
