const initialState = []


const movesReducer = (state = initialState, action) => {

  switch (action.type) {
    case "GET_MOVES":

        return [...state, ...action.payload]

    default:
      return state
  }


}

export default movesReducer
