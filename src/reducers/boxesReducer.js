const initialState = []

const boxesReducer = (state=initialState, action) => {

  switch (action.type) {
    case "GET_BOXES":
    
      console.log("===========payload", action.payload)
      return [...action.payload]

    case "ADD_BOX":
    // debugger
      return [...state, action.payload]

    case "DELETE_BOX":
      return state.filter((box) => box.id !== action.payload)

    case "EDIT_BOX":
      return state.map((box) => {

        if (box.id === action.payload.id) {
          // debugger
          return action.payload
        } else {
          return box;
        }
      })

    default:
      return state;
  }


}


export default boxesReducer
