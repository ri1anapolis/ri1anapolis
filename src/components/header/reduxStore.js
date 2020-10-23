import createStore from "../../utils/simpleRedux"

const menuReducer = (state = {}, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return { ...state, open: !state.open }
    case "CLOSE_MENU":
      return { ...state, open: false }
    default:
      return state
  }
}

const store = createStore(menuReducer)

export default store
