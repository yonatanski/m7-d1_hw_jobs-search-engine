import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../action"
import { initialState } from "../store"

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      }

    case REMOVE_FROM_FAV:
      return {
        ...state,
        favourites: state.favourites.filter((company) => company !== action.payload),
      }

    default:
      return state
  }
}
export default mainReducer
