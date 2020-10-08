import createStore from "../../utils/simpleRedux"

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_STATE":
      return { ...state, ...action.state }
    default:
      return state
  }
}

const store = createStore(searchReducer)

export default store
