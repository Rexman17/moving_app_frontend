// const movesIndex = `http://localhost:3000/api/v1/moves/`

export function fetchMovesAction() {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/moves/`)
      .then(r => r.json())
      .then(moves => {
        // debugger
        return dispatch({type: 'GET_MOVES', payload: moves })
    })
  }
}
