// const movesIndex = `http://localhost:3000/api/v1/moves/`

// GET MOVES
export function getMoves(id) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${id}/moves`)
      .then(r => r.json())
      .then(moves => {
        // debugger
        return dispatch({type: 'GET_MOVES', payload: moves })
    })
  }
}


// POST TO MOVES aka Create a Move
export function addMove(name, date, userId) {
  // debugger
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/moves`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          name: name,
          date: date
      })
    })
      .then(r => r.json())
      .then(newMove => {
        // debugger
        return dispatch({type: 'ADD_MOVE', payload: newMove})
      })
  }
}

// Delete a Move
// ENDPOINT: http://localhost:3000/api/v1/users/1/moves/1
export function deleteMove(userId, moveId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/moves/${moveId}`, {
      method: 'DELETE'
    })
      .then(r => r.json())
      .then(deletedMove => {
        return dispatch({type: 'DELETE_MOVE', payload: deletedMove.id})
      })
  }
}
