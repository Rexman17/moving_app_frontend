const initialState = {
  id: null,
  name: '',
  category: ''
}

const singleBoxReducer = (state=initialState, action) => {

  switch (action.type) {

    case "SELECT_BOX":
      return {...state, ...action.payload}


    default:
      return state;

  }


}

export default singleBoxReducer;
