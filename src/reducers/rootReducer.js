// Must create initial state to have as a default value because there is no state in the store the first time the app runs:

const initialState = {
  moves: []
}

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case "GET_MOVES":

        return {...state, moves: [...state.moves, ...action.payload]}

    default:
      return state
  }


}



export default rootReducer;

// root reducer combines all other reducers
