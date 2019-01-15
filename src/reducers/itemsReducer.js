const initialState = []

const itemsReducer = (state=initialState, action) => {

  switch (action.type) {
    case "GET_MOVE_ITEMS":
      // console.log("===========payload", action.payload, action)
      return [...action.payload]

    case "GET_BOX_ITEMS":
      return [...action.payload]

    case "ADD_ITEM":
    // debugger
      return [...state, action.payload]


    default:
      return state;
  }
}

export default itemsReducer;
