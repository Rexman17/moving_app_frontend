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

    case "DELETE_ITEM":
      return state.filter((item) => item.id !== action.payload)
    // 
    // case "DELETE_BOX_ITEMS":
    //   return

    // case "EDIT_ITEM":
    // return state.map((item) => {
    //
    //   if (item.id === action.payload.id) {
    //     // debugger
    //     return action.payload
    //   } else {
    //     return item;
    //   }
    // })

    default:
      return state;
  }
}

export default itemsReducer;
