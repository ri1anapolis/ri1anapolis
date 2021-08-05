import LogRocket from "logrocket"
import setupLogRocketReact from "logrocket-react"
import { version } from "../../package.json"

function setupLogRocket() {
  LogRocket.init(process.env.GATSBY_LOGROCKET_APP_ID, {
    shouldAggregateConsoleErrors: true,
    release: version,
  })
  setupLogRocketReact(LogRocket)
}

export default setupLogRocket
