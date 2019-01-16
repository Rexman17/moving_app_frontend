// GET BOXES FOR SPECIFIC MOVE
export function getBoxes(userId, moveId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/moves/${moveId}/boxes`, {
      method: 'GET',
      headers: { Accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}` }
    })
      .then(r => r.json())
      .then(boxes => {
        // debugger
        return dispatch({type: 'GET_BOXES', payload: boxes})
      })
  }
}

// CREATE A BOX
export function addBox(name, category, userId, moveId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/moves/${moveId}/boxes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      body: JSON.stringify({
        name: name,
        category: category
      })
    })
      .then(r => r.json())
      .then(newBox => {
        // debugger
        return dispatch({type: "ADD_BOX", payload: newBox})
      })
  }
}

// DELETE A BOX
// `http://localhost:3000/api/v1/users/${userId}/moves/${moveId}/boxes/${boxId}`
export function deleteBox(userId, moveId, boxId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/moves/${moveId}/boxes/${boxId}`, {
      method: 'DELETE',
      headers: {  Authorization: `Bearer ${localStorage.getItem('jwt')}` }
    })
      return dispatch({type: 'DELETE_BOX', payload: boxId})
  }
}

// SELECT BOX TO EDIT:
export function selectBox(box) {
  return {
    type: "SELECT_BOX",
    payload: box
  }
}

// PREFILL EDIT FORM:
// export function prefillForm(box) {
//   return {
//     type: "PREFILL_FORM"
//   }
// }

// PATCH REQUEST / EDIT BOX
// `http://localhost:3000/api/v1/users/${userId}/moves/${moveId}/boxes/${boxId}`
export function editBox(name, category, userId, moveId, boxId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/moves/${moveId}/boxes/${boxId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      body: JSON.stringify({
        name: name,
        category: category
      })
    })
      .then(r => r.json())
      .then(editedBox => {
        return dispatch({ type: "EDIT_BOX", payload: editedBox })
      })
  }
}





//
