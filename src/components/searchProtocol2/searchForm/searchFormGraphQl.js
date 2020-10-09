import gql from "graphql-tag"

const gqlQuery = gql`
  query($protocol: String!) {
    process(query: { name: $protocol }) {
      name
      nature
      status
      email
      step {
        description
        name
        allow_notes_download
      }
    }
    requirements_note(query: { _id: $protocol }) {
      hash
      encrypted_url
    }
  }
`

export default gqlQuery
