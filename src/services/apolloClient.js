import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost"
import { setContext } from "apollo-link-context"
import { Stitch, UserApiKeyCredential } from "mongodb-stitch-browser-sdk"

const APP_ID = "teste-mciev"
const APP_KEY =
  "QRvGGc4tlitv1tYeBBniljU3DgZctq7kRUXD1YkdMK5BRti5KP1nAOs4BEreE19D"

const app = Stitch.hasAppClient(APP_ID)
  ? Stitch.getAppClient(APP_ID)
  : Stitch.initializeAppClient(APP_ID)

async function getAccessToken(credential) {
  if (!app.auth.user) {
    await app.auth.loginWithCredential(credential)
  } else {
    await app.auth.refreshAccessToken()
  }
  const { accessToken } = app.auth.activeUserAuthInfo
  return accessToken
}

const credential = new UserApiKeyCredential(APP_KEY)
const authorizationHeaderLink = setContext(async (_, { headers }) => {
  const accessToken = await getAccessToken(credential)
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  }
})

const graphql_url = `https://stitch.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`
const httpLink = new HttpLink({ uri: graphql_url })

const client = new ApolloClient({
  link: authorizationHeaderLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client
