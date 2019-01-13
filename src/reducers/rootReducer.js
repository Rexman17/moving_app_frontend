// Must create initial state to have as a default value because there is no state in the store the first time the app runs:
import { combineReducers } from 'redux';
import movesReducer from './movesReducer'
import userReducer from './userReducer'
import singleMoveReducer from './singleMoveReducer'
import boxesReducer from './boxesReducer'
import itemsReducer from './itemsReducer'
import singleBoxReducer from './singleBoxReducer'

const rootReducer = combineReducers({ moves: movesReducer, user: userReducer, selectedMove: singleMoveReducer, boxes: boxesReducer, selectedBox: singleBoxReducer, moveItems: itemsReducer })

// making key value pairs for a global store


export default rootReducer;

// root reducer combines all other reducers
