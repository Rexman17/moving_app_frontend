import React from 'react';
import { connect } from 'react-redux';
import { getMoves } from '../actions/moveActions'

const movesIndex = `http://localhost:3000/api/v1/moves/`
class MoveContainer extends React.Component {

  // state = {
  //   moves: []
  // }
  //
  componentDidMount() {
    fetch(movesIndex)
    .then(response => response.json())
    .then(moves => {
      // In React, we'd do this.setState but with redux we can only update state via a reducer
      // If we want to interact w redux state, we must DISPATCH an ACTION
      console.log("Fetched Moves:", moves);
    })

  }

  render() {
    console.log("MoveContainer props:", this.props.getMoves);
    return (
      <div>MoveContainer</div>
    )
  }
}

// Retrieve the data from within the Redux Store:
const mapStateToProps = (state) => {
  return {
    moves: state.moves
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoves: () => { dispatch({ type: 'GET_MOVES'})}
  }
}

// the connect is an HOC which is listening to the redux for when the mapStateToProps changes, i.e., when moves gets updated
// whenever the moves reducer gets updated
export default connect(mapStateToProps, mapDispatchToProps)(MoveContainer);
