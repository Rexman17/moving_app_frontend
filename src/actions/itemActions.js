// http://localhost:3000/api/v1/users/1/moves/1/boxes

// get all items for a SPECIFIC MOVE,
// NOT just all of a user's items, this is all of a user's items INSIDE A SPECIFIC MOVE
export function getMoveItems(userId, moveId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/moves/${moveId}/boxes`, {
      method: 'GET',
      headers: { Accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}` },
    })
      .then(r => r.json())
      .then(boxesWithItems => {
        // debugger
        let nestedArrayOfItems = boxesWithItems.map(function(box) {return box.items})
        let arrayOfItems = [].concat.apply([], nestedArrayOfItems)
        // debugger
        return dispatch({type: 'GET_MOVE_ITEMS', payload: arrayOfItems })
      })
  }
}


// get items for a SPECIFIC BOX
// http://localhost:3000/api/v1/users/1/moves/1/boxes/2/items
export function getBoxItems(userId, moveId, boxId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/moves/${moveId}/boxes/${boxId}/items`, {
      method: 'GET',
      headers: { Accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}` },
    })
      .then(r => r.json())
      .then(boxItems => {
        // debugger
          return dispatch({type: 'GET_BOX_ITEMS', payload: boxItems})
      })
  }
}


// CREATE an item, POSTing
export function addItem(name, image, userId, moveId, boxId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/moves/${moveId}/boxes/${boxId}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      body: JSON.stringify({
        name: name,
        image: image
      })
    })
    .then(r => r.json())
    .then(newItem => {
      // debugger
      return dispatch({ type: "ADD_ITEM", payload: newItem })
    })
  }
}

// DELETE ITEM
export function deleteItem(userId, moveId, boxId, itemId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/moves/${moveId}/boxes/${boxId}/items/${itemId}`, {
      method: 'DELETE',
      headers: {  Authorization: `Bearer ${localStorage.getItem('jwt')}` }
    })
    return dispatch({ type: 'DELETE_ITEM', payload: itemId })
  }
}

// DELETE A BOX'S ITEMS
export function deleteBoxItems(userId, moveId, boxId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/moves/${moveId}/boxes/${boxId}/items`, {
      method: 'DELETE',
      headers: {  Authorization: `Bearer ${localStorage.getItem('jwt')}` }
    })
    return dispatch({ type: 'DELETE_BOX_ITEMS', payload: boxId })
  }
}

// SELECT ITEM TO EDIT
// export function selectItem(item) {
//   debugger
//   return {
//     type: 'SELECT_ITEM',
//     payload: item
//   }
// }

// EDIT ITEM
// export function editItem(name, image, userId, moveId, boxId, itemId) {
//   return(dispatch) => {
//     fetch(`http://localhost:3000/api/v1/users/${userId}/moves/${moveId}/boxes/${boxId}/items/${itemId}`, {
//       method: 'PATCH',
//       headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
//       body: JSON.stringify({
//         name: name,
//         image: image
//       })
//     })
//     .then(r => r.json())
//     .then(editedItem => {
//       debugger
//       return dispatch({ type: "EDIT_ITEM", payload: editedItem })
//     })
//   }
// }
