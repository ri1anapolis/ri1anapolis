import handleParamsStore from "./handleLogRocketParamsStore"

function setupLogRocket() {
  const allowedClientWindow = typeof window !== "undefined"
  const productionEnvironment = process.env.NODE_ENV === "production"
  const storeName = "ri1anapolis-LogRocket-Record-Settings"
  const { record } = handleParamsStore(storeName)

  if (allowedClientWindow && record) {
    if (productionEnvironment) {
      import("logrocket").then(LogRocket => {
        LogRocket.init(process.env.GATSBY_LOGROCKET_APP_ID, {
          shouldAggregateConsoleErrors: true,
        })
        import("logrocket-react").then(setupLogRocketReact => {
          setupLogRocketReact(LogRocket)
        })
      })
    } else {
      console.info("LogRocket could been recording it!")
    }
  }
}
export default setupLogRocket
