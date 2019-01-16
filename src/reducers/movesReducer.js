const initialState = []


const movesReducer = (state=initialState, action) => {
  switch (action.type) {
    case "GET_MOVES":
      
      return [...action.payload]

    case "ADD_MOVE":
    debugger
      return [...state, action.payload]

    case "DELETE_MOVE":
      return state.filter((move) => move.id !== action.payload)

    case "EDIT_MOVE":
      // debugger
      return state.map((move) => {

        if (move.id === action.payload.id) {
          // debugger
          return action.payload
        } else {
          return move;
        }
      })

    default:
      return state;
  }


}

export default movesReducer
