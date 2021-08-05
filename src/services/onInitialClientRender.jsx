import handleParamsStore from "./handleLogRocketParamsStore"

export const onInitialClientRender = async () => {
  const hasWindows = typeof window !== "undefined"
  const isProdEnv = process.env.NODE_ENV === "production"
  const { record } = handleParamsStore(
    process.env.GATSBY_LOGROCKET_LOCAL_STORAGE
  )

  if (hasWindows && record) {
    if (isProdEnv) {
      const { default: setupLogRocket } = await import("./setupLogRocket")
      setupLogRocket()
    }
  }
}
