const movesIndex = `http://localhost:3000/api/v1/moves/`


export default class MoveAdapter {

  getMoves = () => {
    return fetch(`${movesIndex}`)
    .then(res => res.json())
    // .then(moves)
  }

} // end class
