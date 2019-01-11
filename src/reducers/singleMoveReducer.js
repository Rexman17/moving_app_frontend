const initialState = {
  id: null,
  name: '',
  date: ''
}

const singleMoveReducer = (state=initialState, action) => {

  switch (action.type) {
    case "SELECT_MOVE":
      return {...state, ...action.payload}

    case "PREFILL_FORM":
      return state

    default:
      return state;

  }


}

export default singleMoveReducer;
