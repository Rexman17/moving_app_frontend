const initialState = []

const boxesReducer = (state=initialState, action) => {

  switch (action.type) {
    case "GET_BOXES":
      // console.log("===========payload", action.payload)
      return [...action.payload]

    case "ADD_BOX":
      return [...state, action.payload]

    default:
      return state;
  }


}


export default boxesReducer
