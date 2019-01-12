// http://localhost:3000/api/v1/users/1/moves/1/boxes

// get all items for a SPECIFIC MOVE,
// NOT just all of a user's items, this is all of a user's items INSIDE A SPECIFIC MOVE
export function getItemsForMove(userId, moveId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/moves/${moveId}/boxes`)
      .then(r => r.json())
      .then(items => {
        return dispatch({type: 'GET_SPECIFIC_ITEMS', payload: items })
      })
  }
}
