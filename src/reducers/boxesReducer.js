const initialState = []

const boxesReducer = (state=initialState, action) => {

  switch (action.type) {
    case "GET_BOXES":
      // console.log("===========payload", action.payload)
      return [...action.payload]

    default:
      return state;
  }


}


export default boxesReducer
