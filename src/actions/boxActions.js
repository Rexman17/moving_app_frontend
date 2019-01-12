// GET BOXES FOR SPECIFIC MOVE
export function getBoxes(userId, moveId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/moves/${moveId}/boxes`)
      .then(r => r.json())
      .then(boxes => {
        // debugger
        return dispatch({type: 'GET_BOXES', payload: boxes})
      })
  }
}
