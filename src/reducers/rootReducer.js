// Must create initial state to have as a default value because there is no state in the store the first time the app runs:
import { combineReducers } from 'redux';
import movesReducer from './movesReducer'

const rootReducer = combineReducers({ moves: movesReducer })

// making key value pairs for a global store


export default rootReducer;

// root reducer combines all other reducers
