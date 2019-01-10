const initialState = []


const movesReducer = (state = initialState, action) => {

  switch (action.type) {
    case "GET_MOVES":
      return [...state, ...action.payload]

    case "ADD_MOVE":
      return [...state, action.payload]

    case "DELETE_MOVE":
      return state.filter((move) => move.id !== action.payload)

    default:
      return state
  }


}

export default movesReducer
