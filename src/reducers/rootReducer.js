// Must create initial state to have as a default value because there is no state in the store the first time the app runs:
const initialState = {
  moves: []
}

const rootReducer = (state = initialState, action) => {
  return state;
}



export default rootReducer;
