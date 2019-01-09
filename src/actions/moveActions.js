import MoveAdapter from '../apis/MoveAdapter'
// export const getMoves = () => {
//   return {
//     type: 'GET_MOVES',
//     payload:
//   }
// }

// Just trying to fetch Moves!
export function fetchMovesAction() {
  return(dispatch) => {
    dispatch({ type: 'FETCHING_ANIMAL' })
    MoveAdapter.getMoves()
    .then(moves =>  {
      dispatch(getMovesAction(moves))
      dispatch({ type: 'FETCHING_ANIMAL' })
    })
  }
}

export function getMovesAction(moves) {
  return {
    type: 'GET_MOVES',
    payload: moves
  }
}
