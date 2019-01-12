const initialState = []

const boxesReducer = (state=initialState, action) => {

  switch (action.type) {
    case "GET_BOXES":
      return [...state, ...action.payload]

    default:
      return state;
  }


}


export default boxesReducer
